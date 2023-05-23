export declare interface PackageData {
    order_id: string
    destination_name: string
    destination_phone: string
    destination_address: string
    destination_district_id: bigint
    destination_zipcode: string | bigint
    weight: bigint
    width: bigint
    length: bigint
    height: bigint
    qty: bigint
    item_value: bigint
    shipping_cost: bigint
    service: string
    service_type: string
    cod: bigint
    package_type_id: bigint
    item_name: string
    drop?: boolean
    note?: string
}
