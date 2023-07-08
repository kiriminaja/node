import {Mode} from "./mode";
import {Cache} from "./cache";

export class _cacheMode {
    /**
     * @type {string}
     */
    static key = '---KiriminAja-Cached-Mode-Key---'

    /**
     * @return {(string)[]}
     */
    static allowMode() {
        return [
            Mode.Production,
            Mode.Staging
        ]
    }

    /**
     * @param {string} mode
     * @return {void}
     */
    setMode(mode) {
        if (!this.constructor.allowMode().includes(mode)) throw new Error("Mode not allowed, allowed mode " + JSON.stringify(this.constructor.allowMode()) + `, your mode ${mode}`)
    }

    /**
     * @return {*}
     */
    getMode() {
        return Cache.getCache(this.constructor.key) ?? Mode.Staging
    }
}
