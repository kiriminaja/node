import {ModelBase} from "../base/model-base";

export class RequestPickupInstantData extends ModelBase {
    /**
     * @type {string}
     */
    service
    /**
     * @type {string}
     */
    service_type
    /**
     * @type {?string}
     */
    insurance_type = null
    /**
     * @type {string}
     */
    vehicle_name
    /**
     * @type {[PackageInstantData]}
     */
    packages

    /**
     * @return {?Object}
     */
    getMapped() {
        let data = this.toArray()
        data.vehicle = {
            name: this.vehicle_name
        }
        delete data.vehicle_name
        return data
    }
}
