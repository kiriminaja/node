export class CancelShippingService extends ServiceBase {
    /**
     * @param {string} orderId
     * @param {string} reason
     */
    constructor(orderId: string, reason: string);
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
    /**
     * @type {string}
     */
    orderId: string;
    /**
     * @type {string}
     */
    reason: string;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingRepository } from "../../repositories/shipping-repository";
import { ServiceResponse } from "../../responses/service-response";
