export class GetPaymentService extends ServiceBase {
    /**
     * @params {string} paymentId
     */
    constructor(paymentId: any);
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
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
import { ShippingRepository } from "../../repositories/shipping-repository";
import { ServiceResponse } from "../../responses/service-response";
