export class PackageData extends ModelBase {
    /**
     * @type {string}
     */
    order_id: string;
    /**
     * @type {string}
     */
    destination_name: string;
    /**
     * @type {string}
     */
    destination_phone: string;
    /**
     * @type {string}
     */
    destination_address: string;
    /**
     * @type {number}
     */
    destination_kecamatan_id: number;
    /**
     * @type {number|string}
     */
    destination_zipcode: number | string;
    /**
     * @type {number}
     */
    weight: number;
    /**
     * @type {number}
     */
    width: number;
    /**
     * @type {number}
     */
    length: number;
    /**
     * @type {number}
     */
    height: number;
    /**
     * @type {number}
     */
    qty: number;
    /**
     * @type {number}
     */
    item_value: number;
    /**
     * @type {number}
     */
    shipping_cost: number;
    /**
     * @type {?number}
     */
    insurance_amount: number | null;
    /**
     * @type {number}
     */
    cod: number;
    /**
     * @type {number}
     */
    package_item_id: number;
    /**
     * @type {string}
     */
    service: string;
    /**
     * @type {string}
     */
    service_type: string;
    /**
     * @type {string}
     */
    item_name: string;
    /**
     * @type {boolean}
     */
    drop: boolean;
    /**
     * @type {?string}
     */
    note: string | null;
}
import { ModelBase } from "../base/model-base";
