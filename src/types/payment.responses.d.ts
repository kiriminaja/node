import { BaseResponse } from "./response";

export type PaymentExpressData = {
    payment_id: string;
    qr_content: string;
    method: string;
    pay_time: string;
    status: string;
    status_code: string;
    amount: number;
    paid_at: string | null;
    created_at: string;
};

export interface GetPaymentExpressResponse extends BaseResponse {
    data: PaymentExpressData;
}

export type PaymentInstantPackageLocation = {
    name: string;
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
};

export type PaymentInstantPackage = {
    awb: string;
    order_id: string;
    service: string;
    service_name: string;
    status: number;
    live_track_url: string | null;
    origin: PaymentInstantPackageLocation;
    destination: PaymentInstantPackageLocation;
};

export type PaymentInstantResult = {
    payment_id: string;
    amount: number;
    status_code: number;
    qr_content: string | null;
    pay_time: string | null;
    packages: PaymentInstantPackage[];
};

export interface GetPaymentInstantResponse extends BaseResponse {
    result: PaymentInstantResult;
    code: null;
}

export type GetPaymentResponse =
    | GetPaymentExpressResponse
    | GetPaymentInstantResponse;
