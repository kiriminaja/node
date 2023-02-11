export class KiriminAjaConfig {
    public static Production = "production"
    public static Staging = "staging"
    private static currentMode: string
    private static apiKey: string

    static mode(): any {
        return this.currentMode ?? this.Staging
    }

    /**
     * @param mode
     */
    static setMode(mode: string) {
        this.currentMode = mode
        return this
    }

    /**
     * @param key
     */
    static setApiKey(key: string) {
        this.apiKey = key
        return this
    }

    /**
     * @return any
     */
    static getApiKey(): any {
        return this.apiKey ?? null
    }
}
