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
}
