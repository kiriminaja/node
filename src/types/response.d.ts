export type BaseResponse<T> = {
    status: boolean;
    method: string;
    text: string;
    datas: T;
};
