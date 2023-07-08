export class ProvinceService extends ServiceBase {
    addressRepository: AddressRepository;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { AddressRepository } from "../../repositories/address-repository";
