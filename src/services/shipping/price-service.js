import {ServiceBase} from "../../base/service-base";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class PriceService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()

    /**
     * @type {ShippingPriceData}
     */
    data

    /**
     * @param {ShippingPriceData} data
     */
    constructor(data) {
        super(data);
        this.data = data
    }


    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingRepository.price(this.data)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
