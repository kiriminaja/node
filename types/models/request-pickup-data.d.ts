export class RequestPickupData extends ModelBase {
    /**
     * @type {string}
     */
    address: string;
    /**
     * @type {string}
     */
    phone: string;
    /**
     * @type {string}
     */
    name: string;
    /**
     * @type {string|number}
     */
    zipcode: string | number;
    /**
     * @type {string|number}
     */
    kecamatan_id: string | number;
    /**
     * @type {[PackageData]}
     */
    packages: [PackageData];
    /**
     * @type {string}
     */
    schedule: string;
    /**
     * @type {?string}
     */
    platform_name: string | null;
}
import { ModelBase } from "../base/model-base";
