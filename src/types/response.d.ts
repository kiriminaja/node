export type BaseResponse = {
    status: boolean;
    method: string;
    text: string;
    code?: string | number | null;
};
