import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {ShippingInstantRepository} from "../../repositories/shipping-instant-repository";

export class RequestPickupInstantService extends ServiceBase {
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository = new ShippingInstantRepository()
    /**
     * @type {RequestPickupInstantData}
     */
    data

    /**
     * @param {RequestPickupInstantData} data
     */
    constructor(data) {
        super(data);

        this.data = data
    }

    /**
     * @param {PackageInstantData} pkg
     */
    addPackage(pkg) {
        this.data.packages.push(pkg.getMapped())
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.shippingInstantRepository.create(this.data)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success({
                payment: result.payment
            }, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
