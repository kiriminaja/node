export interface ServiceClientContract {
    /**
     * @param endpoint
     * @param data
     */
    get(endpoint: string, data: any)

    /**
     * @param endpoint
     * @param data
     */
    post(endpoint: string, data: any)

    /**
     * @param endpoint
     * @param data
     */
    put(endpoint: string, data: any)

    /**
     * @param endpoint
     * @param data
     */
    delete(endpoint: string, data: any)
}
