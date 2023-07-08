import {ServiceBase} from "../../base/service-base";
import {AddressRepository} from "../../repositories/address-repository";

export class CityService extends ServiceBase {
    /**
     * @type {AddressRepository}
     */
    addressRepository = new AddressRepository()
    /**
     * @type {string|number}
     */
    provinceId

    /**
     * @param {string|number} provinceId
     */
    constructor(provinceId) {
        super();
        this.provinceId = provinceId
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.addressRepository.cities(this.provinceId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
