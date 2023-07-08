import {ServiceBase} from "../../base/service-base";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class CancelShippingInstantService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()

    /**
     * @type {string}
     */
    orderId

    /**
     * @type {string}
     */
    reason

    /**
     * @param {string} orderId
     * @param {string} reason
     */
    constructor(orderId, reason) {
        super(orderId, reason)
        this.orderId = orderId
        this.reason = reason
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingRepository.cancel(this.orderId, this.reason)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }

}
