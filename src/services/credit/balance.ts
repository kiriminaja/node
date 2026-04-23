import type { CreditBalanceResponse } from "../../types/credit-responses";
import { getJson } from "../../http/request";

export const balance = () =>
    getJson<CreditBalanceResponse>("/api/mitra/v6.2/credit/balance");
