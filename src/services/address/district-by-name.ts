import type { DistrictByNameResponse } from "../../types/coverage-area.responses.js";
import { postJson } from "../../http/request.js";

export const getDistrictsByName = (search: string) => {
    return postJson<DistrictByNameResponse>(
        "/api/mitra/v2/get_address_by_name",
        {
            search,
        },
    );
};
