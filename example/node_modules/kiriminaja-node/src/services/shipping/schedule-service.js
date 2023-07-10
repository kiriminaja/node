import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {ShippingRepository} from "../../repositories/shipping-repository";

export class ScheduleService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository = new ShippingRepository()

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingRepository.schedules()
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
