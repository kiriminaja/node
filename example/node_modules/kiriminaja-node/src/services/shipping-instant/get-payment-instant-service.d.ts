export class GetPaymentInstantService extends ServiceBase {
    /**
     * @params {string} paymentId
     */
    constructor(paymentId: any);
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository: ShippingInstantRepository;
    /**
     * @type {string}
     */
    paymentId: string;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingInstantRepository } from "../../repositories/shipping-instant-repository";
import { ServiceResponse } from "../../responses/service-response";
