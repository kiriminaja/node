import {KiriminAjaConfig} from "../Config/KiriminAjaConfig";

class ApiOptions {
    private method: any

    static baseURL(): string {
        switch (KiriminAjaConfig.mode()) {
            case KiriminAjaConfig.Staging:
                return "https://tdev.kiriminaja.com/"
            case KiriminAjaConfig.Production:
                return "https://kiriminaja.com/"
            default:
                throw new Error("Unknown development mode")
        }
    }

    static getHeaders(): object {
        return {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ` + KiriminAjaConfig.getApiKey(),
        }
    }
}
