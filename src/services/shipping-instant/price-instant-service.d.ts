export class PriceInstantService extends ServiceBase {
    /**
     * @param {ShippingPriceInstantData} data
     */
    constructor(data: ShippingPriceInstantData);
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository: ShippingInstantRepository;
    /**
     * @type {ShippingPriceInstantData}
     */
    data: ShippingPriceInstantData;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingInstantRepository } from "../../repositories/shipping-instant-repository";
import { ServiceResponse } from "../../responses/service-response";
