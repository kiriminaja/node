import { BaseResponse } from "./response";

export interface CancelExpressOrderResponse extends BaseResponse {
    data: {
        success: string;
        date: string;
    };
}

export interface ExpressTrackingResponse extends BaseResponse {
    details: {
        awb: string | null;
        signature_code: string | null;
        sorting_code: string | null;
        order_id: string;
        status_code: number | null;
        estimation: string;
        service: string;
        service_name: string;
        drop: boolean;
        shipped_at: string | null;
        delivered: boolean;
        delivered_at: string | null;
        refunded: boolean;
        refunded_at: string | null;
        images: {
            camera_img: string | null;
            signature_img: string | null;
            pop_img: string | null;
        };
        costs: {
            add_cost: number;
            currency: string;
            cod: number;
            insurance_amount: number;
            insurance_percent: number;
            discount_amount: number;
            subsidi_amount: number;
            shipping_cost: number;
            correction: number;
        };
        origin: {
            name: string;
            address: string;
            phone: string;
            city: string;
            zip_code: string | number;
        };
        destination: {
            name: string;
            address: string;
            phone: string;
            city: string;
            zip_code: string | number;
        };
    };
    histories: {
        created_at: string;
        status: string;
        status_code: number;
        driver: string;
        receiver: string;
    }[];
}

export interface InstantTrackingResponse extends BaseResponse {
    result?: {
        driver: {
            name: string | null;
            phone: string | null;
            photo: string | null;
        };
        origin: {
            name: string;
            address: string;
            address_note: string;
            phone: string;
            lat: number;
            long: number;
        };
        destination: {
            name: string;
            address: string;
            address_note: string;
            phone: string;
            lat: number;
            long: number;
        };
        date: {
            created_at: string;
            finished_at: string | null;
            allocated_at: string | null;
            canceled_at: string | null;
        };
        cost: {
            shipping_cost: number;
            insurance: number | null;
            admin_fee: number;
            total_price: number;
        };
        item: {
            price: number;
            description: string;
        };
        order_id: string;
        service: string;
        service_type: string;
        tracking_code: string;
        cancel_description: string | null;
        live_tracking_url: string | null;
    };
}

export interface CancelInstantOrderResponse extends BaseResponse {
    result: {
        payment: {
            payment_id: string;
            amount: number;
            status_code: number;
            qr_content: string | null;
            pay_time: string;
        };
        packages: {
            awb: string;
            order_id: string;
            service: string;
            service_type: string;
            status: number;
            live_track_url: string | null;
            polyline?: string;
            origin: {
                name: string;
                address: string;
                phone: string;
                latitude: number;
                longitude: number;
            };
            destination: {
                name: string;
                address: string;
                phone: string;
                latitude: number;
                longitude: number;
            };
        }[];
    };
}

export type CreateInstantPickupResponse = unknown;
export type FindNewInstantDriverResponse = unknown;
