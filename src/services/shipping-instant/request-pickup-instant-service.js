import {ServiceBase} from "../../base/service-base";
import {ShippingInstantRepository} from "../../repositories/shipping-instant-repository";

export class PriceInstantService extends ServiceBase {
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
     * @param {PackageInstantData} additionalPackages
     */
    constructor(data, ...additionalPackages) {
        super(data);

        this.data = data
        additionalPackages.forEach((pkg) => {
            this.constructor.prototype.addPackage(pkg)
        })
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
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
