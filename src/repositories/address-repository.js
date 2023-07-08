import {RepositoryBase} from "../base/repository-base";

export class AddressRepository extends RepositoryBase {
    /**
     * @return {Promise<(boolean|string)[]>}
     */
    provinces() {
        return this.constructor.api().post("api/mitra/province", null)
    }

    /**
     * @param {string|number} province_id
     * @return {Promise<(boolean|string)[]>}
     */
    cities(province_id) {
        return this.constructor.api().post('api/mitra/city', {
            provinsi_id: province_id
        })
    }

    /**
     * @param {string|number} city_id
     * @return {Promise<(boolean|string)[]>}
     */
    districts(city_id) {
        return this.constructor.api().post('api/mitra/kecamatan', {
            kabupaten_id: city_id
        })
    }

    /**
     * @param {string} keyword
     * @return {Promise<(boolean|string)[]>}
     */
    districtByName(keyword) {
        return this.constructor.api().post('api/mitra/v2/get_address_by_name', {
            search: keyword
        })
    }
}
