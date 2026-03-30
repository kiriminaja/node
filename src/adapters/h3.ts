import { AsyncLocalStorage } from "node:async_hooks";
import { init, type InitOptions, type FetchLike } from "../config/client.js";
import { services } from "../services/index.js";
import { KAEnv } from "../config/api.js";

export { KAEnv };

/**
 * Holds a per-request API key scoped to a single async execution context.
 * Populated internally when `useKiriminAja({ apiKey })` is called.
 */
const apiKeyStorage = new AsyncLocalStorage<string>();

/**
 * Recursively wraps every function in `obj` so it runs inside
 * `apiKeyStorage.run(apiKey, ...)`, enabling per-call key isolation
 * without requiring callers to manage AsyncLocalStorage directly.
 */
function wrapWithApiKey<T extends object>(obj: T, apiKey: string): T {
    return new Proxy(obj, {
        get(target, key) {
            const val = target[key as keyof T];
            if (typeof val === "function") {
                return (...args: unknown[]) =>
                    apiKeyStorage.run(apiKey, () =>
                        (val as (...a: unknown[]) => unknown).apply(
                            target,
                            args,
                        ),
                    );
            }
            if (typeof val === "object" && val !== null) {
                return wrapWithApiKey(val as object, apiKey);
            }
            return val;
        },
    });
}

/**
 * Creates a Nitro/h3 server plugin that initializes the KiriminAja SDK.
 *
 * Accepts either a plain options object or a factory function — use the
 * factory form when you need to read Nuxt runtime config lazily (i.e. inside
 * the plugin callback where `useRuntimeConfig()` is available).
 *
 * The plugin automatically wraps the fetch implementation so that any call to
 * `useKiriminAja({ apiKey })` inside an event handler will override the
 * Authorization header for that specific request without affecting other
 * concurrent requests.
 *
 * @example Plain options (shared API key)
 * ```ts
 * // server/plugins/kiriminaja.ts
 * import { defineKiriminAjaPlugin, KAEnv } from 'kiriminaja/adapters/h3'
 *
 * export default defineKiriminAjaPlugin({
 *   apiKey: process.env.KIRIMINAJA_API_KEY,
 *   env: KAEnv.PRODUCTION,
 * })
 * ```
 *
 * @example With Nuxt runtime config
 * ```ts
 * // server/plugins/kiriminaja.ts
 * import { defineKiriminAjaPlugin, KAEnv } from 'kiriminaja/adapters/h3'
 * import { useRuntimeConfig } from '#imports'
 *
 * export default defineKiriminAjaPlugin(() => ({
 *   apiKey: useRuntimeConfig().kiriminajaApiKey,
 *   env: KAEnv.PRODUCTION,
 * }))
 * ```
 */
export const defineKiriminAjaPlugin = (
    options: InitOptions | (() => InitOptions),
) => {
    return () => {
        const resolved = typeof options === "function" ? options() : options;
        const baseFetch: FetchLike = resolved.fetch ?? globalThis.fetch;

        const wrappedFetch: FetchLike = (input, reqInit) => {
            const perRequestKey = apiKeyStorage.getStore();
            if (perRequestKey) {
                const headers = new Headers(
                    reqInit?.headers as ConstructorParameters<
                        typeof Headers
                    >[0],
                );
                headers.set("Authorization", `Bearer ${perRequestKey}`);
                return baseFetch(input, { ...reqInit, headers });
            }
            return baseFetch(input, reqInit);
        };

        init({ ...resolved, fetch: wrappedFetch });
    };
};

export type UseKiriminAjaOptions = {
    apiKey?: string;
};

/**
 * Returns the KiriminAja service methods for use inside Nitro/h3 event
 * handlers or Nuxt server routes.
 *
 * - **No arguments** — uses the API key configured via `defineKiriminAjaPlugin`.
 * - **`{ apiKey }`** — overrides the Authorization header for every service
 *   call made on the returned object. Safe for concurrent requests; each call
 *   runs in its own `AsyncLocalStorage` context so keys never bleed across
 *   requests.
 *
 * The SDK **must** have been initialized (via `defineKiriminAjaPlugin`) before
 * any service method is called.
 *
 * @example Shared API key (from plugin)
 * ```ts
 * // server/api/rates.post.ts
 * import { useKiriminAja } from 'kiriminaja/adapters/h3'
 *
 * export default defineEventHandler(async (event) => {
 *   const { coverageArea } = useKiriminAja()
 *   const body = await readBody(event)
 *   return coverageArea.pricingExpress(body)
 * })
 * ```
 *
 * @example Per-user API key
 * ```ts
 * // server/api/rates.post.ts
 * import { useKiriminAja } from 'kiriminaja/adapters/h3'
 *
 * export default defineEventHandler(async (event) => {
 *   const user = await requireAuthUser(event)
 *   const body = await readBody(event)
 *   const { coverageArea } = useKiriminAja({ apiKey: user.kiriminajaApiKey })
 *   return coverageArea.pricingExpress(body)
 * })
 * ```
 */
export const useKiriminAja = (options?: UseKiriminAjaOptions) => {
    if (!options?.apiKey) return services;
    return wrapWithApiKey(services, options.apiKey);
};
