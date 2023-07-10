import {ModelBase} from "../base/model-base";

export class ShippingPriceInstantData extends ModelBase {
    /**
     * @type {[string]}
     */
    service = []

    /**
     * @type {number}
     */
    origin_lat

    /**
     * @type {number}
     */
    origin_long

    /**
     * @type {string}
     */
    origin_address

    /**
     * @type {number}
     */
    destination_lat

    /**
     * @type {number}
     */
    destination_long

    /**
     * @type {string}
     */
    destination_address

    /**
     * @type {number}
     */
    item_price

    /**
     * @type {number}
     */
    weight

    /**
     * @type {string}
     */
    vehicle_name
}
