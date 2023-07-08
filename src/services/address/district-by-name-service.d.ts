export class DistrictByNameService extends ServiceBase {
    /**
     * @param {string} keyword
     */
    constructor(keyword: string);
    /**
     * @type {AddressRepository}
     */
    addressRepository: AddressRepository;
    /**
     * @type {string}
     */
    keyword: string;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { AddressRepository } from "../../repositories/address-repository";
import { ServiceResponse } from "../../responses/service-response";
