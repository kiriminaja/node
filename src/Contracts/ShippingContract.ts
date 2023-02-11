import {ShippingPriceData} from "../Models/ShippingPriceData";
import {ShippingFullPriceData} from "../Models/ShippingFullPriceData";
import {RequestPickupData} from "../Models/RequestPickupData";

export interface ShippingContract {
    /**
     * @param data
     */
    price(data: ShippingPriceData)

    /**
     * @param data
     */
    fullShippingPrice(data: ShippingFullPriceData)

    schedules(): void

    /**
     * @param data
     */
    requestPickup(data: RequestPickupData)

    /**
     * @param paymentId
     */
    payment(paymentId: string)

    /**
     * @param awb
     * @param reason
     */
    cancel(awb: string, reason: string)

    /**
     * @param orderId
     */
    tracking(orderId: string)
}
