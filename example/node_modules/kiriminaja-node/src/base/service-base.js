import {ServiceResponse} from "../responses/service-response";

export class ServiceBase {
    /**
     * @param {*} data
     * @param {?string} message
     * @return {ServiceResponse}
     */
    static success(data, message = "Success") {
        return new ServiceResponse(true, message, data)
    }

    /**
     * @param {*} data
     * @param {string} message
     * @return {ServiceResponse}
     */
    static error(data, message) {
        return new ServiceResponse(true, message, data)
    }
}
