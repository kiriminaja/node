import type { CityListResponse } from "../../types/coverage-area.responses.js";
import { postJson } from "../../http/request.js";

export const getCities = (provinsiId: number) => {
    return postJson<CityListResponse>("/api/mitra/city", {
        provinsi_id: provinsiId,
    });
};
