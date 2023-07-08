export class ShippingPriceInstantData extends ModelBase {
    /**
     * @type {[string]}
     */
    service: [string];
    /**
     * @type {number}
     */
    origin_lat: number;
    /**
     * @type {number}
     */
    origin_long: number;
    /**
     * @type {string}
     */
    origin_address: string;
    /**
     * @type {number}
     */
    destination_lat: number;
    /**
     * @type {number}
     */
    destination_long: number;
    /**
     * @type {string}
     */
    destination_address: string;
    /**
     * @type {number}
     */
    item_price: number;
    /**
     * @type {number}
     */
    weight: number;
    /**
     * @type {string}
     */
    vehicle_name: string;
}
import { ModelBase } from "../base/model-base";
