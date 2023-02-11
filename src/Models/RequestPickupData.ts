import {PackageData} from "./PackageData";

export type RequestPickupData = {
    address: string,
    phone: string,
    name: string,
    zipcode: string,
    kecamatan_id: string,
    packages: PackageData[],
    schedule: string,
    platform_name?: string | null
}
