import {ServiceBase} from "../../base/service-base";
import {ShippingInstantRepository} from "../../repositories/shipping-instant-repository";

export class FindNewDriverService extends ServiceBase {
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository = new ShippingInstantRepository()

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
            const {status, message, result} = this.shippingInstantRepository.findNewDriver(this.orderId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
