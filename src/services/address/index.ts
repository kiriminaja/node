import { getProvinces } from "./province";
import { getCities } from "./city";
import { getDistricts } from "./district";
import { getSubDistricts } from "./sub-district";
import { getDistrictsByName } from "./district-by-name";

export const address = {
    provinces: getProvinces,
    cities: getCities,
    districts: getDistricts,
    subDistricts: getSubDistricts,
    districtsByName: getDistrictsByName,
};
