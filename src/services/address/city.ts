import type { CityListResponse } from "../../types/coverage-area.responses";
import { postJson } from "../../http/request";

export const getCities = (provinsiId: number) => {
    return postJson<CityListResponse>("/api/mitra/city", {
        provinsi_id: provinsiId,
    });
};
