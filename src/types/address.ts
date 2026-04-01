export interface Address {
    provinces(): void;
    cities(provinceId: number): void;
    districts(cityId: number): void;
    districtsByName(name: string): void;
}
