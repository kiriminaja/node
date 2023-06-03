import {Api} from "../Base/Api/api";

/**
 * @param data
 * @return {*}
 */
const price = (data) => {
    let payload = {
        service: data.service,
        origin: {
            long: data.origin_long,
            lat: data.origin_lat,
            address: data.origin_address
        },
        destination: {
            long: data.destination_long,
            lat: data.destination_lat,
            address: data.destination_address
        },
        vehicle: {
            name: data.vechile_name
        },
        item_price: data.item_price,
        weight: data.weight
    }
    return Api(true).post('open-api/v1/instants/price', payload)
}


/**
 * @param orderId
 * @return {*}
 */
const findNewDriver = (orderId) => {
    return Api(true).post('open-api/v1/instants/find-new-driver', {
        order_id: orderId
    })
}

/**
 * @param paymentId
 * @return {*}
 */
const getPayment = paymentId => {
    return Api(true).get(`open-api/v1/instants/payment/${paymentId}`)
}

/**
 * @param payload
 * @return {*}
 */
const create = payload => {
    return Api(true).post('open-api/v1/instants', payload)
}

/**
 * @param orderId
 * @return {*}
 */
const cancel = orderId => {
    return Api(true).del(`open-api/v1/instants/${orderId}`)
}

export const ShippingInstantRepository = {
    price,
    findNewDriver,
    getPayment,
    create,
    cancel
}
