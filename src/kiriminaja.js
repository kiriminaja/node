import {FindNewDriverService} from "./services/shipping-instant/find-new-driver-service";
import {TrackingService} from "./services/shipping/tracking-service";
import {CancelShippingService} from "./services/shipping/cancel-shipping-service";
import {CancelShippingInstantService} from "./services/shipping-instant/cancel-shipping-instant-service";
import {GetPaymentService} from "./services/shipping/get-payment-service";
import {GetPaymentInstantService} from "./services/shipping-instant/get-payment-instant-service";
import {RequestPickupInstantService} from "./services/shipping-instant/request-pickup-instant-service";
import {RequestPickupService} from "./services/shipping/request-pickup-service";
import {ScheduleService} from "./services/shipping/schedule-service";
import {PriceInstantService} from "./services/shipping-instant/price-instant-service";
import {PriceService} from "./services/shipping/price-service";
import {SetCallbackService} from "./services/preference/set-callback-service";
import {SetWhitelistExpeditionService} from "./services/preference/set-whitelist-expedition-service";
import {ProvinceService} from "./services/address/province-service";
import {CityService} from "./services/address/city-service";
import {ServiceResponse} from "./responses/service-response";
import {RequestPickupInstantData} from "./models/request-pickup-instant-data";
import {RequestPickupData} from "./models/request-pickup-data";
import {ShippingPriceData} from "./models/shipping-price-data";
import {PackageInstantData} from "./models/package-instant-data";
import {ShippingPriceInstantData} from "./models/shipping-price-instant-data";
import {DistrictService} from "./services/address/district-service";
import {DistrictByNameService} from "./services/address/district-by-name-service";

export class KiriminAja {

    /**
     * @param {number} provinceId
     * @return {ServiceResponse}
     */
    static getCity(provinceId) {
        return (new CityService(provinceId)).call()
    }

    /**
     * @param {string} keyword
     * @return {ServiceResponse}
     */
    static getDistrictByName(keyword) {
        return (new DistrictByNameService(keyword)).call()
    }

    /**
     * @param {number} cityId
     * @return {ServiceResponse}
     */
    static getDistrict(cityId) {
        return (new DistrictService(cityId)).call()
    }

    /**
     * @return {ServiceResponse}
     */
    static getProvince() {
        return (new ProvinceService()).call()
    }

    /**
     * @param {[string]} services
     * @return {ServiceResponse}
     */
    static setWhiteListExpedition(services) {
        return (new SetWhitelistExpeditionService(services)).call()
    }

    /**
     * @param url
     * @return {ServiceResponse}
     */
    static setCallback(url) {
        return (new SetCallbackService(url)).call()
    }

    /**
     * @param {ShippingPriceData} data
     * @return {ServiceResponse}
     */
    static getPrice(data) {
        return (new PriceService(data)).call()
    }

    /**
     * @param {ShippingPriceInstantData} data
     * @return {ServiceResponse}
     */
    static getPriceInstant(data) {
        return (new PriceInstantService(data)).call()
    }

    /**
     * @return {ServiceResponse}
     */
    static getSchedules() {
        return (new ScheduleService()).call()
    }

    /**
     * @param {RequestPickupData} data
     * @return {ServiceResponse}
     */
    static requestPickup(data) {
        return (new RequestPickupService(data)).call()
    }

    /**
     * @param {RequestPickupInstantData} data
     * @return {ServiceResponse}
     */
    static requestPickupInstant(data) {
        return (new RequestPickupInstantService(data)).call()
    }

    /**
     * @param {string} paymentId
     * @param {?boolean} isInstant
     * @return {ServiceResponse}
     */
    static getPayment(paymentId, isInstant = false) {
        return (isInstant ? new GetPaymentInstantService(paymentId) : new GetPaymentService(paymentId)).call()
    }

    /**
     * @param {string} referenceNo
     * @param {string} reason
     * @param {?boolean} isInstant
     * @return {ServiceResponse}
     */
    static cancelShipment(referenceNo, reason, isInstant = false) {
        return (isInstant ? new CancelShippingInstantService(referenceNo) : new CancelShippingService(referenceNo, referenceNo)).call()
    }

    /**
     * @param {string} orderId
     * @return {ServiceResponse}
     */
    static getTracking(orderId) {
        return (new TrackingService(orderId)).call()
    }


    /**
     * @param {string} orderId
     * @return {ServiceResponse}
     */
    static findNewDriver(orderId) {
        return (new FindNewDriverService(orderId)).call()
    }
}
