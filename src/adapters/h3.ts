import { init, type InitOptions } from "../config/client.js";
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
 * @example Plain options
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

/**
 * Returns the KiriminAja service methods for use inside Nitro/h3 event
 * handlers or Nuxt server routes.
 *
 * The SDK **must** have been initialized (via `defineKiriminAjaPlugin`) before
 * any service method is called.
 *
 * @example
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
 */
export const useKiriminAja = () => services;
