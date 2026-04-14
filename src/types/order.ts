import type { InstantService, InstantVehicle } from "./courier";

export interface RequestPickupPackage {
    order_id: string;
    destination_name: string;
    destination_phone: string;
    destination_address: string;
    destination_kecamatan_id: number;
    destination_kelurahan_id?: number;
    destination_zipcode?: string;
    weight: number;
    width: number;
    length: number;
    height: number;
    qty?: number;
    item_value: number;
    shipping_cost: number;
    service: string;
    service_type: string;
    insurance_amount?: number;
    cod: number;
    package_type_id: number;
    item_name: string;
    drop?: boolean;
    note?: string;
}

export interface RequestPickupPayload {
    address: string;
    phone: string;
    name: string;
    zipcode?: string;
    kecamatan_id: number;
    kelurahan_id?: number;
    latitude?: number;
    longitude?: number;
    packages: RequestPickupPackage[];
    schedule: string;
    platform_name?: string;
}

export interface InstantPickupItem {
    name: string;
    description: string;
    price: number;
    weight: number;
}

export interface InstantPickupPackage {
    origin_name: string;
    origin_phone: string;
    origin_lat: number;
    origin_long: number;
    origin_address: string;
    origin_address_note: string;
    destination_name: string;
    destination_phone: string;
    destination_lat: number;
    destination_long: number;
    destination_address: string;
    destination_address_note: string;
    shipping_price: number;
    item: InstantPickupItem;
}

export interface InstantPickupPayload {
    /**
     * @description Use string for custom courier codes that not provided in InstantService enum
     */
    service: InstantService | string;
    service_type: string;
    vehicle: InstantVehicle;
    order_prefix: string;
    packages: InstantPickupPackage[];
}
