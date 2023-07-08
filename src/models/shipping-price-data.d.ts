export class ShippingPriceData extends ModelBase {
    /**
     * @type {number}
     */
    origin: number;
    /**
     * @type {number}
     */
    destination: number;
    /**
     * @type {number}
     */
    weight: number;
    /**
     * @type {?number}
     */
    insurance: number | null;
    /**
     * @type {?number}
     */
    item_value: number | null;
    /**
     * @type {?[string]|string}
     */
    courier: ([string] | string) | null;
}
import { ModelBase } from "../base/model-base";
