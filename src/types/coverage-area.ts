export type City = {
    id: number;
    provinsi_id: number;
    kabupaten_name: string;
    type: string;
    postal_code: string;
};

export type District = {
    id: number;
    kecamatan_name: string;
    kabupaten_id: number;
};

export type SubDistrict = {
    id: number;
    kelurahan_name: string;
    kecamatan_id: number;
};

export type AddressByNameResult = {
    id: number;
    text: string;
};
