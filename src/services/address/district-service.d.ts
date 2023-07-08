export class DistrictService extends ServiceBase {
    /**
     * @param {number} cityId
     */
    constructor(cityId: number);
    /**
     * @type {AddressRepository}
     */
    addressRepository: AddressRepository;
    /**
     * @type {number}
     */
    cityId: number;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { AddressRepository } from "../../repositories/address-repository";
