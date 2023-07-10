import {ModelBase} from "../base/model-base";

export class PackageData extends ModelBase {
    /**
     * @type {string}
     */
    order_id
    /**
     * @type {string}
     */
    destination_name
    /**
     * @type {string}
     */
    destination_phone
    /**
     * @type {string}
     */
    destination_address
    /**
     * @type {number}
     */
    destination_kecamatan_id
    /**
     * @type {number|string}
     */
    destination_zipcode
    /**
     * @type {number}
     */
    weight
    /**
     * @type {number}
     */
    width
    /**
     * @type {number}
     */
    length
    /**
     * @type {number}
     */
    height
    /**
     * @type {number}
     */
    qty
    /**
     * @type {number}
     */
    item_value
    /**
     * @type {number}
     */
    shipping_cost
    /**
     * @type {?number}
     */
    insurance_amount
    /**
     * @type {number}
     */
    cod
    /**
     * @type {number}
     */
    package_item_id
    /**
     * @type {string}
     */
    service
    /**
     * @type {string}
     */
    service_type
    /**
     * @type {string}
     */
    item_name
    /**
     * @type {boolean}
     */
    drop = false
    /**
     * @type {?string}
     */
    note
}
