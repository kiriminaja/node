import { describe, expect, it } from "bun:test";
import KiriminAja, { KAEnv } from "../src/index";

type FetchCall = {
    input: string | URL | Request;
    init?: RequestInit;
};

const createMockFetch = () => {
    const calls: FetchCall[] = [];
    const fetchMock: typeof fetch = async (input, init) => {
        calls.push({ input, init });
        return new Response(JSON.stringify({ status: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    };
    return { fetchMock, calls };
};

const getHeader = (init: RequestInit | undefined, name: string) => {
    const headers = init?.headers;
    if (!headers) return undefined;
    const asHeaders = new Headers(headers);
    return asHeaders.get(name);
};

describe("KiriminAja singleton init + services", () => {
    it("adds Bearer token from init(apiKey)", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({
            env: KAEnv.SANDBOX,
            apiKey: "abc",
            fetch: fetchMock,
        });

        await KiriminAja.address.provinces();

        expect(calls.length).toBe(1);
        expect(getHeader(calls[0]?.init, "Authorization")).toBe("Bearer abc");
        expect(getHeader(calls[0]?.init, "Accept")).toBe("application/json");
    });

    it("calls province endpoint (POST /api/mitra/province)", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.provinces();

        expect(String(calls[0]?.input)).toContain("/api/mitra/province");
        expect(calls[0]?.init?.method).toBe("POST");
    });

    it("calls cities endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.cities(5);

        expect(String(calls[0]?.input)).toContain("/api/mitra/city");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify({ provinsi_id: 5 }));
    });

    it("calls express cancel endpoint with query params", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.order.express.cancel("AWB123", "reason here");

        const url = new URL(String(calls[0]?.input));
        expect(url.pathname).toContain("/api/mitra/v3/cancel_shipment");
        expect(url.searchParams.get("awb")).toBe("AWB123");
        expect(url.searchParams.get("reason")).toBe("reason here");
        expect(calls[0]?.init?.method).toBe("POST");
    });

    it("calls instant tracking endpoint (GET /api/mitra/v4/instant/tracking/{id})", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.order.instant.track("OID123");

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v4/instant/tracking/OID123",
        );
        expect(calls[0]?.init?.method).toBe("GET");
    });

    it("calls instant cancel endpoint (DELETE /api/mitra/v4/instant/pickup/void/{id})", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.order.instant.cancel("OID123");

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v4/instant/pickup/void/OID123",
        );
        expect(calls[0]?.init?.method).toBe("DELETE");
    });

    it("calls courier list endpoint (POST /api/mitra/couriers)", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.courier.list();

        expect(String(calls[0]?.input)).toContain("/api/mitra/couriers");
        expect(calls[0]?.init?.method).toBe("POST");
    });
});
