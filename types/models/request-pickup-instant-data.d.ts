export class RequestPickupInstantData extends ModelBase {
    /**
     * @type {string}
     */
    service: string;
    /**
     * @type {string}
     */
    service_type: string;
    /**
     * @type {?string}
     */
    insurance_type: string | null;
    /**
     * @type {string}
     */
    vehicle_name: string;
    /**
     * @type {[PackageInstantData]}
     */
    packages: [PackageInstantData];
    /**
     * @return {?Object}
     */
    getMapped(): any | null;
}
import { ModelBase } from "../base/model-base";
