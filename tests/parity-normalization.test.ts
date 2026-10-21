import { describe, expect, it } from "bun:test";
import KiriminAja from "../src/index";
import type { FetchLike } from "../src/config/client";

const setup = (payload: unknown) => {
    const calls: { input: string; init?: RequestInit }[] = [];
    const fetchMock: FetchLike = async (input, init) => {
        calls.push({ input: String(input), init });
        return new Response(JSON.stringify(payload), { status: 200 });
    };
    KiriminAja.init({ fetch: fetchMock });
    return calls;
};

describe("PHP response parity", () => {
    it.each([
        ["results", { id: 1, name: "Merchant" }],
        ["result", { id: 2, email: "merchant@example.com" }],
        ["data", { id: 3, metadata: {} }],
        ["unwrapped", { id: 4, name: "Merchant" }],
    ])("normalizes profile %s envelope", async (envelope, value) => {
        const payload = envelope === "unwrapped" ? value : { status: true, [envelope]: value };
        const calls = setup(payload);
        const result = await KiriminAja.profile();
        expect(result.status).toBe(true);
        expect(result.results).toEqual(value as unknown as typeof result.results);
        expect(calls[0]?.input).toContain("/api/mitra/v6.2/profile");
    });

    it.each([
        [{ results: { balance: 4000724100 } }, 4000724100],
        [{ result: { balance: "125000" } }, 125000],
        [{ data: { balance: 125000 } }, 125000],
        [{ balance: 50000 }, 50000],
    ])("normalizes balance payload", async (payload, expected) => {
        setup({ status: true, ...payload });
        const result = await KiriminAja.credit.balance();
        expect(result.status).toBe(true);
        expect(result.data.balance).toBe(expected);
    });

    it("reports missing profile and balance data", async () => {
        setup({ status: true, text: "loaded" });
        expect((await KiriminAja.profile()).text).toBe("Profile data is missing from the API response");
        setup({ status: true, text: "loaded" });
        expect((await KiriminAja.credit.balance()).text).toBe("Credit balance is missing from the API response");
    });

    it("exposes PHP preference callback and full shipping price endpoints", async () => {
        const calls = setup({ status: true });
        await KiriminAja.preference.setCallback("https://example.test/callback");
        expect(calls[0]?.input).toContain("/api/mitra/set_callback");
        expect(JSON.parse(String(calls[0]?.init?.body))).toEqual({ url: "https://example.test/callback" });
        await KiriminAja.coverageArea.pricingExpressFull({ origin: 1, destination: 2, weight: 1000 });
        expect(calls[1]?.input).toContain("/api/mitra/v6.1/shipping_price");
    });
});
