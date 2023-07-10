export class FindNewDriverService extends ServiceBase {
    /**
     * @param {string} orderId
     */
    constructor(orderId: string);
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository: ShippingInstantRepository;
    /**
     * @type {string}
     */
    orderId: string;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingInstantRepository } from "../../repositories/shipping-instant-repository";
import { ServiceResponse } from "../../responses/service-response";
