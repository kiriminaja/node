import {ModelBase} from "../base/model-base";

export class RequestPickupData extends ModelBase {
    /**
     * @type {string}
     */
    address
    /**
     * @type {string}
     */
    phone
    /**
     * @type {string}
     */
    name
    /**
     * @type {string|number}
     */
    zipcode
    /**
     * @type {string|number}
     */
    kecamatan_id
    /**
     * @type {[PackageData]}
     */
    packages
    /**
     * @type {string}
     */
    schedule
    /**
     * @type {?string}
     */
    platform_name = null
}
