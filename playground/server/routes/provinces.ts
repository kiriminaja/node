import { defineEventHandler } from "h3";
import { useKiriminAja } from "kiriminaja/adapters/h3";

export default defineEventHandler(async () => {
    const { address } = useKiriminAja();
    return address.provinces();
});
