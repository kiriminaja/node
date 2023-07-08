export class RequestPickupService extends ServiceBase {
    /**
     * @param {RequestPickupData} data
     */
    constructor(data: RequestPickupData);
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
    /**
     * @type {RequestPickupData}
     */
    data: RequestPickupData;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingRepository } from "../../repositories/shipping-repository";
import { RequestPickupData } from "../../models/request-pickup-data";
import { ServiceResponse } from "../../responses/service-response";
