export declare interface ShippingPriceDataInstant {
    service: any[]
    origin_lat: number
    origin_long: number
    origin_address: string
    destination_lat: number
    destination_long: number
    destination_address: string
    item_price: bigint
    weight: bigint
    vehicle_name?: string | 'motor'
}
