import {ShippingPriceData} from "../Models/shipping-price-data";
import {ShippingPriceDataInstant} from "../Models/shipping-price-data-instant";
import {RequestPickupData} from "../Models/request-pickup-data";
import {RequestPickupDataInstant} from "../Models/request-pickup-data-instant";
export declare interface KiriminAjaContract {
    getCity(provinceId: bigint)
    getDistrictByName(keyword: string)
    getDistrict(cityId: bigint)
    getProvince()
    setWhiteListExpedition(services: string[])
    setCallback(url: string)
    getPrice(payload: ShippingPriceData)
    getPriceInstant(payload: ShippingPriceDataInstant)
    requestPickup(payload: RequestPickupData)
    requestPickupInstant(payload: RequestPickupDataInstant)
    getSchedules()
    getPayment(paymentId: string, isInstant?: boolean)
    cancelShipment(referenceNo: string, reason: string, isInstant?: boolean)
    getTracking(orderId: string)
    findNewDriver(orderId: string)
}
