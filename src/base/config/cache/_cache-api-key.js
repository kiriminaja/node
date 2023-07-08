import {Cache} from "./cache";

export class _cacheApiKey {
    /**
     * @type {string}
     */
    static key = "---KiriminAja-Cached-Api-Key---"

    /**
     * @param {string} key
     * @return {void}
     */
    setKey(key) {
        if (typeof key != 'string') throw Error("api key must be string")
        Cache.setCache(this.constructor.key, key)
    }

    /**
     * @return {*}
     */
    getKey() {
        return Cache.getCache(this.constructor.key)
    }
}
