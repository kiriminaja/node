export class KiriminAja {
    /**
     * @param {number} provinceId
     * @return {ServiceResponse}
     */
    static getCity(provinceId: number): ServiceResponse;
    /**
     * @param {string} keyword
     * @return {ServiceResponse}
     */
    static getDistrictByName(keyword: string): ServiceResponse;
    /**
     * @param {number} cityId
     * @return {ServiceResponse}
     */
    static getDistrict(cityId: number): ServiceResponse;
    /**
     * @return {ServiceResponse}
     */
    static getProvince(): ServiceResponse;
    /**
     * @param {[string]} services
     * @return {ServiceResponse}
     */
    static setWhiteListExpedition(services: [string]): ServiceResponse;
    /**
     * @param url
     * @return {ServiceResponse}
     */
    static setCallback(url: any): ServiceResponse;
    /**
     * @param {ShippingPriceData} data
     * @return {ServiceResponse}
     */
    static getPrice(data: ShippingPriceData): ServiceResponse;
    /**
     * @param {ShippingPriceInstantData} data
     * @return {ServiceResponse}
     */
    static getPriceInstant(data: ShippingPriceInstantData): ServiceResponse;
    /**
     * @return {ServiceResponse}
     */
    static getSchedules(): ServiceResponse;
    /**
     * @param {RequestPickupData} data
     * @return {ServiceResponse}
     */
    static requestPickup(data: RequestPickupData): ServiceResponse;
    /**
     * @param {RequestPickupInstantData} data
     * @return {ServiceResponse}
     */
    static requestPickupInstant(data: RequestPickupInstantData): ServiceResponse;
    /**
     * @param {string} paymentId
     * @param {?boolean} isInstant
     * @return {ServiceResponse}
     */
    static getPayment(paymentId: string, isInstant?: boolean | null): ServiceResponse;
    /**
     * @param {string} referenceNo
     * @param {string} reason
     * @param {?boolean} isInstant
     * @return {ServiceResponse}
     */
    static cancelShipment(referenceNo: string, reason: string, isInstant?: boolean | null): ServiceResponse;
    /**
     * @param {string} orderId
     * @return {ServiceResponse}
     */
    static getTracking(orderId: string): ServiceResponse;
    /**
     * @param {string} orderId
     * @return {ServiceResponse}
     */
    static findNewDriver(orderId: string): ServiceResponse;
}
import { ServiceResponse } from "./responses/service-response";
import { ShippingPriceData } from "./models/shipping-price-data";
import { ShippingPriceInstantData } from "./models/shipping-price-instant-data";
import { RequestPickupData } from "./models/request-pickup-data";
import { RequestPickupInstantData } from "./models/request-pickup-instant-data";
