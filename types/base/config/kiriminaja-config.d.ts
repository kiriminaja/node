export class KiriminajaConfig {
    /**
     * @return {_modeApiKey}
     */
    static modeApiKey(): _modeApiKey;
    /**
     * @param {string} apiTokenKey
     * @return {void}
     */
    static setApiTokenKey(apiTokenKey: string): void;
    /**
     * @param mode
     * @return {KiriminajaConfig}
     */
    static setMode(mode: any): KiriminajaConfig;
    /**
     * @return {_cacheMode}
     */
    static mode(): _cacheMode;
    /**
     * @return {_cacheApiKey}
     */
    static apiKey(): _cacheApiKey;
}
import { _modeApiKey } from "./cache/_mode-api-key";
