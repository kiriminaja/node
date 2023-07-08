export class PackageInstantData extends ModelBase {
    /**
     * @type {string}
     */
    destination_name: string;
    /**
     * @type {string}
     */
    destination_phone: string;
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
     * @type {string}
     */
    destination_address_note: string;
    /**
     * @type {string}
     */
    origin_name: string;
    /**
     * @type {string}
     */
    origin_phone: string;
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
     * @type {string}
     */
    origin_address_note: string;
    /**
     * @type {number}
     */
    shipping_price: number;
    /**
     * @type {string}
     */
    item_name: string;
    /**
     * @type {string}
     */
    item_description: string;
    /**
     * @type {number}
     */
    item_price: number;
    /**
     * @type {string}
     */
    item_weight_in_kg: string;
    /**
     * @return {?Object}
     */
    getMapped(): any | null;
}
import { ModelBase } from "../base/model-base";
