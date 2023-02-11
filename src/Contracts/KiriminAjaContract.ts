import {ShippingPriceData} from "../Models/ShippingPriceData"
import {ServiceResponseContract} from "../Responses/ServiceResponseContract";

export interface KiriminAjaContract {

    /**
     * @param provinceId
     * @return ServiceResponseContract
     */
    getCity(provinceId: number): ServiceResponseContract

    /**
     * @param name
     * @return ServiceResponseContract
     */
    getDistrictByName(name: string): ServiceResponseContract

    /**
     * @param cityId
     * @return ServiceResponseContract
     */
    getDistrict(cityId: number): ServiceResponseContract

    /**
     * @return ServiceResponseContract
     */
    getProvince(): ServiceResponseContract

    /**
     * @param services
     * @return ServiceResponseContract
     */
    setWhitelistExpedition(services: string[]): ServiceResponseContract

    /**
     * @param url
     * @return ServiceResponseContract
     */
    setCallback(url: string): ServiceResponseContract

    /**
     * @param data
     * @return ServiceResponseContract
     */
    getPrice(data: ShippingPriceData): ServiceResponseContract
}
