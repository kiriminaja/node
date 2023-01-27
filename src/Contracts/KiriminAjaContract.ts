import { ShippingPriceData } from "../Models/ShippingPriceData"

export interface KiriminAjaContract {
    getCity(provinceId: number)
    getDistrictByName(name: string)
    getDistrict(cityId: number)
    getProvince()
    setWhitelistExpedition(services: string[])
    setCallback(url: string)
    getPrice(data: ShippingPriceData)
}
