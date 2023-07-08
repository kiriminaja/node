import {_modeApiKey} from "./cache/_mode-api-key";

export class KiriminajaConfig {
    /**
     * @return {_modeApiKey}
     */
    static modeApiKey() {
        return new _modeApiKey()
    }

    /**
     * @param {string} apiTokenKey
     * @return {void}
     */
    static setApiTokenKey(apiTokenKey) {
        this.constructor.prototype.modeApiKey().apiKey().setKey(apiTokenKey)
    }

    /**
     * @param mode
     * @return {KiriminajaConfig}
     */
    static setMode(mode) {
        this.constructor.prototype.modeApiKey().mode().setMode(mode)
        return new this
    }

    /**
     * @return {_cacheMode}
     */
    static mode() {
        return this.constructor.prototype.modeApiKey().mode()
    }

    /**
     * @return {_cacheApiKey}
     */
    static apiKey() {
        return this.constructor.prototype.modeApiKey().apiKey()
    }
}
