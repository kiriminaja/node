import {ModelBase} from "../base/model-base";

export class ShippingPriceData extends ModelBase {
    /**
     * @type {number}
     */
    origin
    /**
     * @type {number}
     */
    destination
    /**
     * @type {number}
     */
    weight
    /**
     * @type {?number}
     */
    insurance = null
    /**
     * @type {?number}
     */
    item_value = null
    /**
     * @type {?[string]|string}
     */
    courier = null
}
