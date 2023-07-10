import {KiriminajaConfig} from "../config/kiriminaja-config";
import {Mode} from "../config/cache/mode";

export class Api {
    method = "GET"
    useInstant = false

    /**
     * @param {boolean} useInstant
     */
    constructor(useInstant = false) {
        this.useInstant = useInstant
    }

    /**
     * @return {boolean}
     */
    isUseInstant() {
        return this.useInstant
    }

    /**
     * @param {boolean} newUseInstant
     * @return {void}
     */
    setUseInstant(newUseInstant) {
        this.useInstant = newUseInstant
    }

    /**
     * @return {string}
     */
    static baseURL() {
        switch (KiriminajaConfig.mode().getMode()) {
            case Mode.Staging:
                return "https://tdev.kiriminaja.com/"
            case Mode.Production:
                return "https://kiriminaja.com/"
            default:
                throw new Error("Unknown mode")
        }
    }

    /**
     * @return {string}
     */
    static baseURLInstant() {
        switch (KiriminajaConfig.mode().getMode()) {
            case Mode.Staging:
                return "https://apieks-staging.kiriminaja.com/"
            case Mode.Production:
                return "https://api.kiriminaja.com/"
            default:
                throw new Error("Unknown mode")
        }
    }

    /**
     * @return {{Authorization: string, Accept: string, "Content-Type": string}}
     */
    static getHeaders() {
        return {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ` + KiriminajaConfig.apiKey().getKey()
        }
    }

    /**
     * @param {*} data
     * @return {{headers: *, method: string}|{headers: *}}
     */
    static dataOption(data) {
        switch (this.constructor.prototype.method) {
            case "GET":
                return {
                    headers: this.constructor.prototype.getHeaders()
                }
            default:
                return {
                    method: "POST",
                    headers: this.constructor.prototype.getHeaders()
                }
        }
    }

    /**
     * @param {string} endpoint
     * @return {string}
     */
    url(endpoint) {
        return (this.constructor.prototype.isUseInstant() ? this.constructor.baseURLInstant() : this.constructor.baseURL()) + endpoint
    }


    /**
     * @param {string} method
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<{result: ?string, message: string, status: boolean}>}
     */
    async request(method, endpoint, data) {
        this.method = method
        let result = {
            status: false,
            message: "Unable to call",
            result: null
        }
        await fetch(this.constructor.url(endpoint), this.constructor.dataOption(data))
            .then((response) => {
                result.status = true
                result.message = "Success"
                result.result = response.json()
            }).catch((err) => {
                result.message = err.message
            })

        return result
    }

    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    get(endpoint, data = null) {
        return this.request("GET", endpoint, data)
    }

    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    post(endpoint, data) {
        return this.request("POST", endpoint, data)
    }

    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    put(endpoint, data) {
        return this.request("PUT", endpoint, data)
    }

    /**
     * @param {string} endpoint
     * @param {*} data
     * @return {Promise<(boolean|string)[]>}
     */
    delete(endpoint, data = null) {
        return this.request("PUT", endpoint, data)
    }

}
