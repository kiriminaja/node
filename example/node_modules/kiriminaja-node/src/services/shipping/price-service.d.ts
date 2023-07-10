export class PriceService extends ServiceBase {
    /**
     * @param {ShippingPriceData} data
     */
    constructor(data: ShippingPriceData);
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
    /**
     * @type {ShippingPriceData}
     */
    data: ShippingPriceData;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingRepository } from "../../repositories/shipping-repository";
import { ServiceResponse } from "../../responses/service-response";
