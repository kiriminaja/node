import {ServiceBase} from "../../base/service-base";
import {AddressRepository} from "../../repositories/address-repository";

export class DistrictService extends ServiceBase {
    /**
     * @type {AddressRepository}
     */
    addressRepository = new AddressRepository()
    /**
     * @type {number}
     */
    cityId

    /**
     * @param {number} cityId
     */
    constructor(cityId) {
        super();

        this.cityId = cityId
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.addressRepository.districts(this.cityId)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
