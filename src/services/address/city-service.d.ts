export class CityService extends ServiceBase {
    /**
     * @param {string|number} provinceId
     */
    constructor(provinceId: string | number);
    /**
     * @type {AddressRepository}
     */
    addressRepository: AddressRepository;
    /**
     * @type {string|number}
     */
    provinceId: string | number;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { AddressRepository } from "../../repositories/address-repository";
import { ServiceResponse } from "../../responses/service-response";
