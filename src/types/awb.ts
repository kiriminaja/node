import type { BaseResponse } from "./response";

export type PrintAWBRequest = {
    awb: string[];
};

export type PrintAWBData = {
    url: string;
};

export type PrintAWBResult = {
    data: PrintAWBData;
};

export interface PrintAWBResponse extends BaseResponse {
    data: PrintAWBResult;
    errors?: unknown[];
}
