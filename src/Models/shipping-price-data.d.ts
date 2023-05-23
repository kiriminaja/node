export declare interface ShippingPriceData {
    origin: bigint
    destination: bigint
    weight: bigint
    insurance?: bigint
    item_value?: bigint
    courier: string | string[]
}
