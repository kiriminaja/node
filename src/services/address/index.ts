import { getProvinces } from "./province.js";
import { getCities } from "./city.js";
import { getDistricts } from "./district.js";
import { getSubDistricts } from "./sub-district.js";
import { getDistrictsByName } from "./district-by-name.js";

export const address = {
    provinces: getProvinces,
    cities: getCities,
    districts: getDistricts,
    subDistricts: getSubDistricts,
    districtsByName: getDistrictsByName,
};
