export class ServiceResponse {
    /**
     * @type {boolean}
     */
    status = false
    /**
     * @type {string}
     */
    message = "-"

    /**
     * @type {*}
     */
    data

    /**
     * @param {boolean} status
     * @param {string} message
     * @param {*} data
     */
    constructor(status, message, data) {
        this.status = status
        this.message = message
        this.data = data
    }
}
