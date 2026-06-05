import type { CalculateCODResponse, CalculateCODRequest } from "../../types/calculations";
import { postJson } from "../../http/request";

export const cod = (payload: CalculateCODRequest) =>
    postJson<CalculateCODResponse>("/api/mitra/calculations/cod", payload);
