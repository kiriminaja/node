export interface AddressContract {
    province()

    cities(provinceId: bigint)

    districts(cityId: bigint)

    districtsByName(keyword: string)
}
