import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class TrackingService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()
    /**
     * @type {string}
     */
    orderId

    /**
     * @param {string} orderId
     */
    constructor(orderId) {
        super(orderId);
        this.orderId = orderId
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingRepository.tracking(this.orderId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
