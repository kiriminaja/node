import type { BaseResponse } from "./response";

export type ProfileMeta = {
    has_pin: boolean;
    payment_method: string;
};

export type ProfileData = {
    id: number;
    email: string;
    name: string;
    status: string;
    metadata: ProfileMeta;
};

export interface ProfileResponse extends BaseResponse {
    results: ProfileData;
}
