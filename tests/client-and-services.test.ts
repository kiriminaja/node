import { describe, expect, it } from "bun:test";
import KiriminAja, { KAEnv } from "../src/index";
import type { FetchLike } from "../src/config/client";
import { KA_ENV_URL } from "../src/config/api";

type FetchCall = {
    input: string | URL | Request;
    init?: RequestInit;
};

const createMockFetch = () => {
    const calls: FetchCall[] = [];
    const fetchMock: FetchLike = async (input, init) => {
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
    it("uses sandbox baseUrl when env=SANDBOX", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.provinces();

        expect(calls.length).toBe(1);
        expect(String(calls[0]!.input)).toStartWith(KA_ENV_URL[KAEnv.SANDBOX]);
    });

    it("uses production baseUrl when env=PRODUCTION", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.PRODUCTION, fetch: fetchMock });

        await KiriminAja.address.provinces();

        expect(calls.length).toBe(1);
        expect(String(calls[0]!.input)).toStartWith(
            KA_ENV_URL[KAEnv.PRODUCTION],
        );
    });

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

    it("calls districts endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.districts(12);

        expect(String(calls[0]?.input)).toContain("/api/mitra/kecamatan");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify({ kabupaten_id: 12 }));
    });

    it("calls sub-districts endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.subDistricts(77);

        expect(String(calls[0]?.input)).toContain("/api/mitra/kelurahan");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify({ kecamatan_id: 77 }));
    });

    it("calls districts-by-name endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.address.districtsByName("jakarta");

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v2/get_address_by_name",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ search: "jakarta" }),
        );
    });

    it("calls pricing express endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        const payload = {
            origin: 1,
            destination: 2,
            weight: 1000,
            item_value: 5000,
            insurance: 0,
            courier: ["jne"],
        };

        await KiriminAja.coverageArea.pricingExpress(payload);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v6.1/shipping_price",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify(payload));
    });

    it("calls pricing instant endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        const payload = {
            service: ["instant"],
            item_price: 10000,
            origin: { lat: -6.2, long: 106.8, address: "A" },
            destination: { lat: -6.21, long: 106.81, address: "B" },
            weight: 1000,
            vehicle: "bike",
            timezone: "Asia/Jakarta",
        };

        await KiriminAja.coverageArea.pricingInstant(payload);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v4/instant/pricing",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify(payload));
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

    it("calls express tracking endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.order.express.track("OID_EXP_1");

        expect(String(calls[0]?.input)).toContain("/api/mitra/tracking");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ order_id: "OID_EXP_1" }),
        );
    });

    it("calls express request pickup v5 endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        const payload = { foo: "bar" };
        await KiriminAja.order.express.requestPickupV5(payload);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v5/request_pickup",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify(payload));
    });

    it("calls express request pickup v6.1 endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        const payload = { baz: 123 };
        await KiriminAja.order.express.requestPickupV61(payload);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v6.1/request_pickup",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify(payload));
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

    it("calls instant create pickup endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        const payload = {
            origin: { address: "A" },
            destination: { address: "B" },
        };
        await KiriminAja.order.instant.create(payload);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v4/instant/pickup/request",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(JSON.stringify(payload));
    });

    it("calls instant find-new-driver endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.order.instant.findNewDriver("OID123");

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v4/instant/pickup/find-new-driver",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ order_id: "OID123" }),
        );
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

    it("calls courier group endpoint (POST /api/mitra/couriers_group)", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.courier.group();

        expect(String(calls[0]?.input)).toContain("/api/mitra/couriers_group");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(calls[0]?.init?.body).toBeUndefined();
        expect(getHeader(calls[0]?.init, "Content-Type")).toBeNull();
    });

    it("calls courier detail endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.courier.detail("jne");

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/courier_services",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ courier_code: "jne" }),
        );
    });

    it("calls courier set whitelist services endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.courier.setWhitelistServices(["jne_reg", "jne_yes"]);

        expect(String(calls[0]?.input)).toContain(
            "/api/mitra/v3/set_whitelist_services",
        );
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ services: ["jne_reg", "jne_yes"] }),
        );
    });

    it("calls pickup schedules endpoint (POST /api/mitra/v2/schedules)", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.pickup.schedules();

        expect(String(calls[0]?.input)).toContain("/api/mitra/v2/schedules");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(calls[0]?.init?.body).toBeUndefined();
        expect(getHeader(calls[0]?.init, "Content-Type")).toBeNull();
    });

    it("calls payment get_payment endpoint with JSON payload", async () => {
        const { fetchMock, calls } = createMockFetch();
        KiriminAja.init({ env: KAEnv.SANDBOX, fetch: fetchMock });

        await KiriminAja.payment.getPayment("PAY123");

        expect(String(calls[0]?.input)).toContain("/api/mitra/v2/get_payment");
        expect(calls[0]?.init?.method).toBe("POST");
        expect(getHeader(calls[0]?.init, "Content-Type")).toBe(
            "application/json",
        );
        expect(calls[0]?.init?.body).toBe(
            JSON.stringify({ payment_id: "PAY123" }),
        );
    });
});
