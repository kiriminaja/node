const NodeCache = require("node-cache");

export class Cache {
    /**
     * @param {string} key
     * @return {?string|unknown}
     */
    static getCache(key) {
        const cache = new NodeCache()
        return cache.get(key)
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} expiry
     * @return {boolean}
     */
    static setCache(key, value, expiry= 604800) {
        const cache = new NodeCache()
        cache.set(key, value, expiry)
        return true
    }

    /**
     * @param {string} key
     */
    static remove(key) {
        const cache = new NodeCache()
        cache.del(key)
    }
}
