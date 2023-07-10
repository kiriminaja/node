export class RequestPickupInstantService extends ServiceBase {
    /**
     * @param {RequestPickupInstantData} data
     */
    constructor(data: RequestPickupInstantData);
    /**
     * @type {ShippingInstantRepository}
     */
    shippingInstantRepository: ShippingInstantRepository;
    /**
     * @type {RequestPickupInstantData}
     */
    data: RequestPickupInstantData;
    /**
     * @param {PackageInstantData} pkg
     */
    addPackage(pkg: PackageInstantData): void;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { ShippingInstantRepository } from "../../repositories/shipping-instant-repository";
import { ServiceResponse } from "../../responses/service-response";
