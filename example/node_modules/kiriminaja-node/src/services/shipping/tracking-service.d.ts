export class TrackingService extends ServiceBase {
    /**
     * @param {string} orderId
     */
    constructor(orderId: string);
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
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
import { ShippingRepository } from "../../repositories/shipping-repository";
import { ServiceResponse } from "../../responses/service-response";
