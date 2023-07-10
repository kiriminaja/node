import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {RequestPickupData} from "../../models/request-pickup-data";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class RequestPickupService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()
    /**
     * @type {RequestPickupData}
     */
    data

    /**
     * @param {RequestPickupData} data
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
            const {status, message, result} = this.shippingRepository.requestPickup(this.data)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success({
                pickup_number: result.pickup_number,
                payment_status: result.payment_status,
                details: result.details
            }, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }

}
