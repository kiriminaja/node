export type KAResponse<T> = {
    status: boolean;
    text: string;
    method?: string | null;
    status_code?: number | null;
    code?: number | null;
    datas?: T;
    data?: T;
    results?: T;
    result?: T;
} & Record<string, unknown>;
