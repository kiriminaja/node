import {ServiceBase} from "../../base/service-base";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class GetPaymentInstantService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()

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
            const {status, message, result} = this.shippingRepository.payment(this.paymentId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }

}
