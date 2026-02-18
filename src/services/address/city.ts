import type { City } from "../../types/coverage-area";
import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const getCities = (provinsiId: number) => {
    return postJson<KAResponse<City[]>>("/api/mitra/city", {
        provinsi_id: provinsiId,
    });
};
