export class Api {
    /**
     * @return {string}
     */
    static baseURL(): string;
    /**
     * @return {string}
     */
    static baseURLInstant(): string;
    /**
     * @return {{Authorization: string, Accept: string, "Content-Type": string}}
     */
    static getHeaders(): {
        Authorization: string;
        Accept: string;
        "Content-Type": string;
    };
    /**
     * @param {*} data
     * @return {{headers: *, method: string}|{headers: *}}
     */
    static dataOption(data: any): {
        headers: any;
        method: string;
    } | {
        headers: any;
    };
    /**
     * @param {boolean} useInstant
     */
    constructor(useInstant?: boolean);
    method: string;
    useInstant: boolean;
    /**
     * @return {boolean}
     */
    isUseInstant(): boolean;
    /**
     * @param {boolean} newUseInstant
     * @return {void}
     */
    setUseInstant(newUseInstant: boolean): void;
    /**
     * @param {string} endpoint
     * @return {string}
     */
    url(endpoint: string): string;
    /**
     * @param {string} method
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<{result: ?string, message: string, status: boolean}>}
     */
    request(method: string, endpoint: string, data: any): Promise<{
        result: string | null;
        message: string;
        status: boolean;
    }>;
    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    get(endpoint: string, data?: any): Promise<(boolean | string)[]>;
    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    post(endpoint: string, data: any): Promise<(boolean | string)[]>;
    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    put(endpoint: string, data: any): Promise<(boolean | string)[]>;
    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    delete(endpoint: string, data?: any): Promise<(boolean | string)[]>;
}
