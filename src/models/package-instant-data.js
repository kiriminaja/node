import {ModelBase} from "../base/model-base";

class PackageInstantData extends ModelBase {
    /**
     * @type {string}
     */
    destination_name
    /**
     * @type {string}
     */
    destination_phone
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
     * @type {string}
     */
    destination_address_note
    /**
     * @type {string}
     */
    origin_name
    /**
     * @type {string}
     */
    origin_phone
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
     * @type {string}
     */
    origin_address_note
    /**
     * @type {number}
     */
    shipping_price
    /**
     * @type {string}
     */
    item_name
    /**
     * @type {string}
     */
    item_description
    /**
     * @type {number}
     */
    item_price
    /**
     * @type {string}
     */
    item_weight_in_kg

    /**
     * @return {?Object}
     */
    getMapped() {
        let data = this.toArray()
        data.item = {
            name: this.item_name,
            type_id: 1,
            description: this.item_description,
            price: this.item_price,
            weight_kg: this.item_weight_in_kg
        }

        delete data.item_name
        delete data.item_description
        delete data.item_price
        delete data.item_weight_in_kg
        return data
    }
}
