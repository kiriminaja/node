export class ServiceBase {
    /**
     * @param {*} data
     * @param {?string} message
     * @return {ServiceResponse}
     */
    static success(data: any, message?: string | null): ServiceResponse;
    /**
     * @param {*} data
     * @param {string} message
     * @return {ServiceResponse}
     */
    static error(data: any, message: string): ServiceResponse;
}
import { ServiceResponse } from "../responses/service-response";
