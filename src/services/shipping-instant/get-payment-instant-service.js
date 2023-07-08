import {ServiceBase} from "../../base/service-base";
import {ShippingInstantRepository} from "../../repositories/shipping-instant-repository";

export class GetPaymentInstantService extends ServiceBase {
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository = new ShippingInstantRepository()

    /**
     * @type {string}
     */
    paymentId

    /**
     * @params {string} paymentId
     */
    constructor(paymentId) {
        super(paymentId);

        this.paymentId = paymentId
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingInstantRepository.getPayment(this.paymentId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }

}
