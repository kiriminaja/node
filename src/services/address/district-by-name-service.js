import {ServiceBase} from "../../base/service-base";
import {AddressRepository} from "../../repositories/address-repository";

export class DistrictByNameService extends ServiceBase {
    /**
     * @type {AddressRepository}
     */
    addressRepository = new AddressRepository()
    /**
     * @type {string}
     */
    keyword

    /**
     * @param {string} keyword
     */
    constructor(keyword) {
        super();

        this.keyword = keyword
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.addressRepository.districtByName(this.keyword)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
