import type { BaseResponse } from "./response";

export type CalculateCODDataItem = {
    courier_code: string;
    courier_service_code: string;
    discount_amount?: number;
    insurance_amount?: number;
    shipping_cost?: number;
};

export type CalculateCODRequest = {
    item_price: number;
    data: CalculateCODDataItem[];
    custom_cod?: number;
    exclude_cod_amount_validation?: boolean;
};

export type CalculateCODMessage = {
    MessageType: string;
    message: string;
};

export type CalculateCODResult = {
    billable_amount: string;
    courier_code: string;
    courier_service_code: string;
    fee: string;
    fee_percentage: number;
    is_support_cod: boolean;
    message: CalculateCODMessage;
    minimum_custom_cod: string;
    minimum_fee: string;
    tax_amount: string;
    tax_percentage: number;
    total_fee: string;
    withdrawal_amount: string;
};

export interface CalculateCODResponse extends BaseResponse {
    results: CalculateCODResult[];
}
