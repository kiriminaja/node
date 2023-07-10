export class ScheduleService extends ServiceBase {
    /**
     * @type {ShippingRepository}
     */
    shippingRepository: ShippingRepository;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingRepository } from "../../repositories/shipping-repository";
import { ServiceResponse } from "../../responses/service-response";
