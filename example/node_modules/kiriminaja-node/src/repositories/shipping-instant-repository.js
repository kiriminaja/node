import {RepositoryBase} from "../base/repository-base";
import {ShippingPriceInstantData} from "../models/shipping-price-instant-data";
import {RequestPickupInstantData} from "../models/request-pickup-instant-data";

export class ShippingInstantRepository extends RepositoryBase {
    /**
     * @param {ShippingPriceInstantData} shippingPriceInstantData
     * @return {Promise<(boolean|string)[]>}
     */
    price(shippingPriceInstantData) {
        let newPayload = {
            service: shippingPriceInstantData.service,
            origin: {
                lat: shippingPriceInstantData.origin_lat,
                long: shippingPriceInstantData.origin_long,
                address: shippingPriceInstantData.origin_address
            },
            destination: {
                lat: shippingPriceInstantData.destination_lat,
                long: shippingPriceInstantData.destination_long,
                address: shippingPriceInstantData.destination_address
            },
            vehicle: {
                name: shippingPriceInstantData.vehicle_name
            },
            item_price: shippingPriceInstantData.item_price,
            weight: shippingPriceInstantData.weight
        }
        return this.constructor.api(true).post('open-api/v1/instants/price', newPayload)
    }

    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    findNewDriver(orderId) {
        return this.constructor.api(true).post('open-api/v1/instants/find-new-driver', {
            order_id: orderId
        })
    }

    /**
     * @param {string} paymentId
     * @return {Promise<(boolean|string)[]>}
     */
    getPayment(paymentId) {
        return this.constructor.api(true).get(`open-api/v1/instants/payment/${paymentId}`)
    }

    /**
     * @param {RequestPickupInstantData} requestPickupInstantData
     * @return {Promise<(boolean|string)[]>}
     */
    create(requestPickupInstantData) {
        return this.constructor.api(true).post('open-api/v1/instants', requestPickupInstantData.getMapped())
    }

    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    cancel(orderId) {
        return this.constructor.api(true).delete(`open-api/v1/instants/${orderId}`)
    }
}
