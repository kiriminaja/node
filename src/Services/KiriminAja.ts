import {KiriminAjaContract} from "../Contracts/KiriminAjaContract";
import {ServiceResponseContract} from "../Responses/ServiceResponseContract";
import {ShippingPriceData} from "../Models/ShippingPriceData";

export class KiriminAja implements KiriminAjaContract
{
    getCity(provinceId: number): ServiceResponseContract {
        return undefined;
    }

    getDistrict(cityId: number): ServiceResponseContract {
        return undefined;
    }

    getDistrictByName(name: string): ServiceResponseContract {
        return undefined;
    }

    getPrice(data: ShippingPriceData): ServiceResponseContract {
        return undefined;
    }

    getProvince(): ServiceResponseContract {
        return undefined;
    }

    setCallback(url: string): ServiceResponseContract {
        return undefined;
    }

    setWhitelistExpedition(services: string[]): ServiceResponseContract {
        return undefined;
    }

}
