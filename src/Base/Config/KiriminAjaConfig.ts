export class KiriminAjaConfig {
    public static Production = "production"
    public static Staging = "staging"
    private static currentMode: string
    private static apiKey: string

    /**
     * @return any
     */
    static mode(): any {
        return this.currentMode ?? this.Staging
    }

    /**
     * @param mode: string
     * @return this
     */
    static setMode(mode: string) {
        this.currentMode = mode
        return this
    }

    /**
     * @param key: string
     * @return this
     */
    static setApiKey(key: string) {
        this.apiKey = key
        return this
    }

    /**
     * @return ?any
     */
    static getApiKey(): any {
        return this.apiKey ?? null
    }
}
