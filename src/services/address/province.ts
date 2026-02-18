import type { Province } from "../../types/region";
import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const getProvinces = () => {
    return postJson<KAResponse<Province[]>>("/api/mitra/province");
};
