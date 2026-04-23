import type { BaseResponse } from "./response";

export type CreditBalanceData = {
    balance: number;
};

export interface CreditBalanceResponse extends BaseResponse {
    data: CreditBalanceData;
}
