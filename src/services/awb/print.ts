import type { PrintAWBResponse, PrintAWBRequest } from "../../types/awb";
import { postJson } from "../../http/request";

export const print = (payload: PrintAWBRequest) =>
    postJson<PrintAWBResponse>("/api/mitra/v6.1/awb/print", payload);
