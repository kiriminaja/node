export class _cacheMode {
    /**
     * @type {string}
     */
    static key: string;
    /**
     * @return {(string)[]}
     */
    static allowMode(): (string)[];
    /**
     * @param {string} mode
     * @return {void}
     */
    setMode(mode: string): void;
    /**
     * @return {*}
     */
    getMode(): any;
}
