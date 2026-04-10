# KiriminAja Node.js SDK

[![npm version](https://img.shields.io/npm/v/kiriminaja)](https://www.npmjs.com/package/kiriminaja)
[![npm downloads](https://img.shields.io/npm/dw/kiriminaja)](https://www.npmjs.com/package/kiriminaja)
[![license](https://img.shields.io/github/license/kiriminaja/node)](LICENSE)

Framework-agnostic JavaScript/TypeScript SDK for the [KiriminAja](https://kiriminaja.com) logistics API. Works with Node.js, Bun, Deno, and any runtime that supports the Fetch API — including Nuxt/Nitro via the included h3 adapter.

## Requirements

- Node.js 18+, Bun, or Deno (built-in `fetch`); or pass a custom `fetch` via `KiriminAja.init({ fetch })`

## Installation

```bash
npm install kiriminaja
# yarn add kiriminaja
# pnpm add kiriminaja
# bun add kiriminaja
```

---

## Quick Start

Call `KiriminAja.init()` once at app startup, then call any service method anywhere.

```ts
import KiriminAja, { KAEnv } from "kiriminaja";

KiriminAja.init({
    env: KAEnv.SANDBOX, // or KAEnv.PRODUCTION
    apiKey: process.env.KIRIMINAJA_API_KEY,
});

// Use any service
const provinces = await KiriminAja.address.provinces();
```

---

## Init Options

| Option    | Type        | Default            | Description                           |
| --------- | ----------- | ------------------ | ------------------------------------- |
| `env`     | `KAEnv`     | `KAEnv.SANDBOX`    | Target environment                    |
| `apiKey`  | `string`    | —                  | Your KiriminAja API key               |
| `baseUrl` | `string`    | Derived from `env` | Override the base URL                 |
| `fetch`   | `FetchLike` | `globalThis.fetch` | Custom fetch (polyfill / test mock)   |
| `headers` | `object`    | —                  | Extra headers sent with every request |

```ts
// Custom base URL
KiriminAja.init({
    baseUrl: "https://tdev.kiriminaja.com",
    apiKey: process.env.KIRIMINAJA_API_KEY,
});

// Node.js < 18 — bring your own fetch
import fetch from "node-fetch";
KiriminAja.init({ apiKey: "...", fetch });
```

---

## Services

### Address

```ts
// List all provinces
await KiriminAja.address.provinces();

// Cities in a province (provinsi_id)
await KiriminAja.address.cities(5);

// Districts in a city (kabupaten_id)
await KiriminAja.address.districts(12);

// Sub-districts in a district (kecamatan_id)
await KiriminAja.address.subDistricts(77);

// Search districts by name
await KiriminAja.address.districtsByName("jakarta");
```

---

### Coverage Area & Pricing

```ts
// Express shipping rates
await KiriminAja.coverageArea.pricingExpress({
    origin: 1,
    destination: 2,
    weight: 1000, // grams
    item_value: 50000,
    insurance: 0,
    courier: ["jne", "jnt"],
});

// Instant (same-day) rates
await KiriminAja.coverageArea.pricingInstant({
    service: [InstantService.GrabExpress],
    item_price: 10000,
    origin: { lat: -6.2, long: 106.8, address: "Jl. Sudirman No.1" },
    destination: { lat: -6.21, long: 106.81, address: "Jl. Thamrin No.5" },
    weight: 1000,
    vehicle: "motor",
    timezone: "Asia/Jakarta",
});
```

---

### Order — Express

```ts
// Track by AWB
await KiriminAja.order.express.track("AWB123456");

// Cancel
await KiriminAja.order.express.cancel("AWB123456", "Customer request");

// Request pickup
await KiriminAja.order.express.requestPickup({
    address: "Jl. Jodipati No.29",
    phone: "08133345678",
    name: "Tokotries",
    kecamatan_id: 548,
    schedule: "2021-11-30 22:00:00",
    packages: [
        {
            order_id: "YGL-000000019",
            destination_name: "Flag Test",
            destination_phone: "082223323333",
            destination_address: "Jl. Magelang KM 11",
            destination_kecamatan_id: 548,
            weight: 520,
            width: 8,
            length: 8,
            height: 8,
            item_value: 275000,
            shipping_cost: 65000,
            service: "jne",
            service_type: "REG23",
            cod: 0,
            package_type_id: 7,
            item_name: "TEST Item name",
        },
    ],
});
```

---

### Order — Instant

```ts
// Create instant pickup
await KiriminAja.order.instant.create({
    service: "gosend",
    service_type: "instant",
    vehicle: "motor",
    order_prefix: "BDI",
    packages: [
        {
            origin_name: "Rizky",
            origin_phone: "081280045616",
            origin_lat: -7.854584,
            origin_long: 110.331154,
            origin_address: "Wirobrajan, Yogyakarta",
            origin_address_note: "Dekat Kantor",
            destination_name: "Okka",
            destination_phone: "081280045616",
            destination_lat: -7.776192,
            destination_long: 110.325053,
            destination_address: "Godean, Sleman",
            destination_address_note: "Dekat Pasar",
            shipping_price: 34000,
            item: {
                name: "Barang 1",
                description: "Barang 1 Description",
                price: 20000,
                weight: 1000,
            },
        },
    ],
});

// Find a new driver for an existing order
await KiriminAja.order.instant.findNewDriver(orderId);

// Cancel instant order
await KiriminAja.order.instant.cancel(orderId);

// Track instant order
await KiriminAja.order.instant.track(orderId);
```

---

### Courier

```ts
// List available couriers
await KiriminAja.courier.list();

// Courier groups
await KiriminAja.courier.group();

// Courier detail
await KiriminAja.courier.detail(courierId);

// Update whitelist services
await KiriminAja.courier.setWhitelistServices(payload);
```

---

### Pickup Schedules

```ts
await KiriminAja.pickup.schedules();
```

---

### Payment

```ts
await KiriminAja.payment.getPayment(orderId);
```

---

## Nuxt / Nitro (h3 Adapter)

The `kiriminaja/adapters/h3` sub-package wraps `init()` into a Nitro server plugin and provides a `useKiriminAja()` composable for event handlers — no extra dependencies required.

### 1. Add your API key to runtime config

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    runtimeConfig: {
        kiriminajaApiKey: process.env.KIRIMINAJA_API_KEY,
    },
});
```

### 2. Create a server plugin

```ts
// server/plugins/kiriminaja.ts
import { defineKiriminAjaPlugin, KAEnv } from "kiriminaja/adapters/h3";

export default defineKiriminAjaPlugin(() => ({
    apiKey: useRuntimeConfig().kiriminajaApiKey,
    env: KAEnv.PRODUCTION,
}));
```

> Pass a **factory function** (as above) when you need `useRuntimeConfig()` — it is called lazily when the plugin boots, not at import time. A plain options object also works if you read the key from `process.env` directly.

### 3. Use in server routes

```ts
// server/api/rates.post.ts
import { useKiriminAja } from "kiriminaja/adapters/h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { coverageArea } = useKiriminAja();
    return coverageArea.pricingExpress(body);
});
```

---

## Per-user / Per-request API Keys

If each user has their own KiriminAja API key, pass it directly to `useKiriminAja({ apiKey })`. No wrapper function needed — the key is scoped to that call and its entire async chain via `AsyncLocalStorage` internally, so concurrent requests are fully isolated.

```ts
// server/api/rates.post.ts
import { useKiriminAja } from "kiriminaja/adapters/h3";

export default defineEventHandler(async (event) => {
    const user = await requireAuthUser(event);
    const body = await readBody(event);

    const { coverageArea } = useKiriminAja({ apiKey: user.kiriminajaApiKey });
    return coverageArea.pricingExpress(body);
});
```

Works on nested namespaces too:

```ts
const { order } = useKiriminAja({ apiKey: user.kiriminajaApiKey });
await order.express.track("AWB123");
```

Calls made without `{ apiKey }` fall back to the key set in `defineKiriminAjaPlugin`.

---

## Runtime Overrides (env & baseUrl)

Besides `apiKey`, `useKiriminAja()` also accepts `env` and `baseUrl` to override the config set by the plugin — useful for internal proxies, staging servers, or switching environments per-request.

| Option    | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `apiKey`  | `string` | Override the Authorization header                     |
| `env`     | `KAEnv`  | Switch between `KAEnv.SANDBOX` and `KAEnv.PRODUCTION` |
| `baseUrl` | `string` | Point all requests to a custom URL                    |

```ts
// Route requests through an internal proxy
import { useKiriminAja } from "kiriminaja/adapters/h3";

export default defineEventHandler(async (event) => {
    const { coverageArea } = useKiriminAja({
        baseUrl: "https://internal-proxy.local",
    });
    return coverageArea.pricingExpress(await readBody(event));
});
```

```ts
// Switch to production for a specific request
import { useKiriminAja, KAEnv } from "kiriminaja/adapters/h3";

export default defineEventHandler(async (event) => {
    const { coverageArea } = useKiriminAja({ env: KAEnv.PRODUCTION });
    return coverageArea.pricingExpress(await readBody(event));
});
```

Options can be combined freely:

```ts
const { order } = useKiriminAja({
    apiKey: user.kiriminajaApiKey,
    baseUrl: "https://internal-proxy.local",
});
await order.express.track("AWB123");
```

---

## Development

```bash
bun install      # install dependencies
bun test         # run tests
bun run build    # compile to dist/
```
