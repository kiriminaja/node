import {ServiceResponseContract} from "../Responses/ServiceResponseContract";

export interface ResponseContract {
    /**
     *
     * @param data
     * @param message
     * @return ServiceResponseContract
     */
    success(data: any, message: string): ServiceResponseContract

    /**
     * @param data
     * @param message
     * @return ServiceResponseContract
     */
    error(data: any, message: string): ServiceResponseContract

}
