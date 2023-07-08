import {RepositoryBase} from "../base/repository-base";

export class ShippingRepository extends RepositoryBase {
    /**
     * @param {ShippingPriceData} data
     * @return {Promise<(boolean|string)[]>}
     */
    price(data) {
        return this.constructor.api().post('api/mitra/shipping_price', data.toArray())
    }

    /**
     * @return {Promise<(boolean|string)[]>}
     */
    schedules() {
        return this.constructor.api().post('api/mitra/v2/schedules', null)
    }

    /**
     * @param {RequestPickupData} data
     * @return {Promise<(boolean|string)[]>}
     */
    requestPickup(data) {
        if (data.packages.length === 0) throw new Error("Package is not array")

        return this.constructor.api().post('api/mitra/v2/request_pickup', data.toArray())
    }

    /**
     * @param {string} paymentId
     * @return {Promise<(boolean|string)[]>}
     */
    payment(paymentId) {
        return this.constructor.api().post('api/mitra/v2/get_payment', {
            payment_id: paymentId
        })
    }

    /**
     * @param {string} awb
     * @param {string} reason
     * @return {Promise<(boolean|string)[]>}
     */
    cancel(awb, reason) {
        return this.constructor.api().post('api/mitra/v3/cancel_shipment', {
            awb: awb,
            reason: reason
        })
    }

    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    tracking(orderId) {
        return this.constructor.api().post('api/mitra/tracking', {
            order_id: orderId
        })
    }
}
