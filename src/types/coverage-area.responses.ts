import type { Province } from "./region.js";
import type { BaseResponse } from "./response.js";

import type {
    AddressByNameResult,
    City,
    District,
    SubDistrict,
} from "./coverage-area.js";

export interface ProvinceListResponse extends BaseResponse {
    datas: Province[];
}

export interface CityListResponse extends BaseResponse {
    datas: City[];
}

export interface DistrictListResponse extends BaseResponse {
    datas: District[];
}

export interface SubDistrictListResponse extends BaseResponse {
    results: SubDistrict[];
}

export interface DistrictByNameResponse extends BaseResponse {
    data: AddressByNameResult[];
}
