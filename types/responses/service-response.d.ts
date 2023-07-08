export class ServiceResponse {
    /**
     * @param {boolean} status
     * @param {string} message
     * @param {*} data
     */
    constructor(status: boolean, message: string, data: any);
    /**
     * @type {boolean}
     */
    status: boolean;
    /**
     * @type {string}
     */
    message: string;
    /**
     * @type {*}
     */
    data: any;
}
