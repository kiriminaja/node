import {ShippingPriceData} from "../Models/shipping-price-data";
import {ShippingPriceDataInstant} from "../Models/shipping-price-data-instant";
export declare interface KiriminAjaContract {
    getCity(provinceId: bigint)
    getDistrictByName(keyword: string)
    getDistrict(cityId: bigint)
    getProvince()
    setWhiteListExpedition(services: string[])
    setCallback(url: string)
    getPrice(payload: ShippingPriceData)
    getPriceInstant(payload: ShippingPriceDataInstant)
    getSchedules()

    //Incomplete
    fullShippingPrice()
    requestPickup()
    requestPickupInstant()

    // Done
    getPayment(paymentId: string, isInstant?: boolean)
    cancelShipment(referenceNo: string, reason: string, isInstant?: boolean)
    getTracking(orderId: string)
    findNewDriver(orderId: string)
}
