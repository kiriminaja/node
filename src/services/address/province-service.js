import {ServiceBase} from "../../base/service-base";
import {AddressRepository} from "../../repositories/address-repository";

export class ProvinceService extends ServiceBase {
    addressRepository = new AddressRepository()

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.addressRepository.provinces()
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
