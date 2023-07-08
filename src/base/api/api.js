import {KiriminajaConfig} from "../config/kiriminaja-config";
import {Mode} from "../config/cache/mode";

class Api {
    method = "GET"
    useInstant = false

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
     * @return {Promise<(boolean|string)[]>}
     */
    async request(method, endpoint, data) {
        this.method = method
        let result = [false, "Unable to call"]
        await fetch(this.constructor.url(endpoint), this.constructor.dataOption(data))
            .then((response) => {
                result = [true, response.json()]
            }).catch((err) => {
                result = [false, err.message]
            })

        return result
    }
}