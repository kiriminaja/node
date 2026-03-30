import { AsyncLocalStorage } from "node:async_hooks";
import { init, type InitOptions, type FetchLike } from "../config/client.js";
import { services } from "../services/index.js";
import { KAEnv } from "../config/api.js";

export { KAEnv };

/**
 * Holds a per-request API key scoped to a single async execution context.
 * Populated by `withApiKey()` and read by the fetch wrapper installed in
 * `defineKiriminAjaPlugin`.
 */
const apiKeyStorage = new AsyncLocalStorage<string>();

/**
 * Creates a Nitro/h3 server plugin that initializes the KiriminAja SDK.
 *
 * Accepts either a plain options object or a factory function — use the
 * factory form when you need to read Nuxt runtime config lazily (i.e. inside
 * the plugin callback where `useRuntimeConfig()` is available).
 *
 * The plugin automatically wraps the fetch implementation so that any call to
 * `withApiKey()` inside an event handler will override the Authorization
 * header for that specific request without affecting other concurrent requests.
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

/**
 * Runs `fn` with a per-request API key scoped to the current async context.
 * All KiriminAja service calls made inside `fn` will use this key instead of
 * the one provided to `defineKiriminAjaPlugin`.
 *
 * Because isolation is provided by `AsyncLocalStorage`, concurrent requests
 * each see their own key with no cross-contamination.
 *
 * @example
 * ```ts
 * // server/api/rates.post.ts
 * import { withApiKey, useKiriminAja } from 'kiriminaja/adapters/h3'
 *
 * export default defineEventHandler(async (event) => {
 *   const user = await requireAuthUser(event)
 *   const body = await readBody(event)
 *
 *   return withApiKey(user.kiriminajaApiKey, () => {
 *     const { coverageArea } = useKiriminAja()
 *     return coverageArea.pricingExpress(body)
 *   })
 * })
 * ```
 */
export const withApiKey = <T>(apiKey: string, fn: () => T): T =>
    apiKeyStorage.run(apiKey, fn);

/**
 * Returns the KiriminAja service methods for use inside Nitro/h3 event
 * handlers or Nuxt server routes.
 *
 * The SDK **must** have been initialized (via `defineKiriminAjaPlugin`) before
 * any service method is called.
 *
 * @example Shared API key
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
 * @example Per-user API key — wrap with `withApiKey`
 * ```ts
 * // server/api/rates.post.ts
 * import { withApiKey, useKiriminAja } from 'kiriminaja/adapters/h3'
 *
 * export default defineEventHandler(async (event) => {
 *   const user = await requireAuthUser(event)
 *   const body = await readBody(event)
 *   return withApiKey(user.kiriminajaApiKey, () => {
 *     return useKiriminAja().coverageArea.pricingExpress(body)
 *   })
 * })
 * ```
 */
export const useKiriminAja = () => services;
