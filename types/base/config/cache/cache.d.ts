export class Cache {
    /**
     * @param {string} key
     * @return {?string|unknown}
     */
    static getCache(key: string): (string | unknown) | null;
    /**
     * @param {string} key
     * @param {string} value
     * @param {number} expiry
     * @return {boolean}
     */
    static setCache(key: string, value: string, expiry?: number): boolean;
    /**
     * @param {string} key
     */
    static remove(key: string): void;
}
