import {Response} from "../../Responses/service-response";
import {ShippingInstantRepository} from "../../Repositories/shipping-instant-repository";

let orderId
const call = () => {
    try {
        const request = ShippingInstantRepository.price(orderId)
    } catch (e) {
        return Response.error(e.message)
    }
}

export const CancelShippingInstantService = (id) => {
    orderId = id
}
