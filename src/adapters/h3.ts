import { init, getConfig, type InitOptions } from "../config/client.js";
import { services } from "../services/index.js";
import { KAEnv } from "../config/api.js";

export { KAEnv };

/**
 * Creates a Nitro/h3 server plugin that initializes the KiriminAja SDK.
 *
 * Accepts either a plain options object or a factory function — use the
 * factory form when you need to read Nuxt runtime config lazily (i.e. inside
 * the plugin callback where `useRuntimeConfig()` is available).
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
        init(resolved);
    };
};

export type UseKiriminAjaOptions = {
    apiKey?: string;
    env?: KAEnv;
    baseUrl?: string;
};

/**
 * Returns the KiriminAja service methods for use inside Nitro/h3 event
 * handlers or Nuxt server routes.
 *
 * - **No arguments** — uses the config set via `defineKiriminAjaPlugin`.
 * - **`{ apiKey }`** — overrides the Authorization header for every service
 *   call made on the returned object.
 * - **`{ env }`** — switches between sandbox and production environments.
 * - **`{ baseUrl }`** — points all requests to a custom URL (e.g. an internal
 *   proxy or staging server).
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
 *
 * @example Custom base URL (internal proxy)
 * ```ts
 * import { useKiriminAja } from 'kiriminaja/adapters/h3'
 *
 * export default defineEventHandler(async (event) => {
 *   const { coverageArea } = useKiriminAja({ baseUrl: 'https://internal-proxy.local' })
 *   return coverageArea.pricingExpress(await readBody(event))
 * })
 * ```
 */
export const useKiriminAja = (options?: UseKiriminAjaOptions) => {
    if (options?.apiKey || options?.env || options?.baseUrl) {
        const current = getConfig();
        const merged = { ...current, ...options };
        // When env changes but no explicit baseUrl was given, clear baseUrl
        // so init() derives it from the new env.
        if (options.env && !options.baseUrl) {
            delete (merged as Record<string, unknown>).baseUrl;
        }
        init(merged);
    }
    return services;
};
