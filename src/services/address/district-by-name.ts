import type { AddressByNameResult } from "../../types/coverage-area";
import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const getDistrictsByName = (search: string) => {
    return postJson<KAResponse<AddressByNameResult[]>>(
        "/api/mitra/v2/get_address_by_name",
        {
            search,
        },
    );
};
