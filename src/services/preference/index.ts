import type { BaseResponse } from "../../types/response";
import { postJson } from "../../http/request";
import { setWhitelistServices } from "../courier/set-whitelist-services";

export const setCallback = (url: string) =>
    postJson<BaseResponse>("/api/mitra/set_callback", { url });

export const preference = {
    setCallback,
    setWhitelistServices,
};
