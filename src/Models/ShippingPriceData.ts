export interface ShippingPriceData {
    origin?: number
    destination?: number
    weight: number
    insurance?: number
    item_value?: number
    courier?: string[]
}
