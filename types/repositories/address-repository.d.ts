export class AddressRepository extends RepositoryBase {
    /**
     * @return {Promise<(boolean|string)[]>}
     */
    provinces(): Promise<(boolean | string)[]>;
    /**
     * @param {string|number} province_id
     * @return {Promise<(boolean|string)[]>}
     */
    cities(province_id: string | number): Promise<(boolean | string)[]>;
    /**
     * @param {string|number} city_id
     * @return {Promise<(boolean|string)[]>}
     */
    districts(city_id: string | number): Promise<(boolean | string)[]>;
    /**
     * @param {string} keyword
     * @return {Promise<(boolean|string)[]>}
     */
    districtByName(keyword: string): Promise<(boolean | string)[]>;
}
import { RepositoryBase } from "../base/repository-base";
