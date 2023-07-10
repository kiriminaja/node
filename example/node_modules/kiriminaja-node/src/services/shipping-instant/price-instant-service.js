import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {ShippingInstantRepository} from "../../repositories/shipping-instant-repository";

export class PriceInstantService extends ServiceBase {
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository = new ShippingInstantRepository()
    /**
     * @type {ShippingPriceInstantData}
     */
    data

    /**
     * @param {ShippingPriceInstantData} data
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
            const {status, message, result} = this.shippingInstantRepository.price(this.data)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
