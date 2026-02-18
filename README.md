# KiriminAja Node.js SDK

[![npm version](https://img.shields.io/npm/v/kiriminaja)](https://www.npmjs.com/package/kiriminaja)
[![npm downloads](https://img.shields.io/npm/dw/kiriminaja)](https://www.npmjs.com/package/kiriminaja)
[![license](https://img.shields.io/github/license/kiriminaja/node)](LICENSE)

## Requirements

- Node.js 18+ (has built-in `fetch`), or provide `fetch` via `KiriminAja.init({ fetch })`

## Installation

```bash
npm install kiriminaja
```

```bash
yarn add kiriminaja
```

```bash
pnpm add kiriminaja
```

```bash
bun add kiriminaja
```

## Setup

Initialize once, then use any endpoint.

```ts
import KiriminAja, { KAEnv } from "kiriminaja";

KiriminAja.init({
    env: KAEnv.SANDBOX, // or KAEnv.PRODUCTION
    apiKey: process.env.KIRIMINAJA_API_KEY,
});
```

If you need to override the base URL:

```ts
KiriminAja.init({
    baseUrl: "https://tdev.kiriminaja.com",
    apiKey: process.env.KIRIMINAJA_API_KEY,
});
```

If you are on Node.js < 18, pass a `fetch` implementation:

```ts
import KiriminAja from "kiriminaja";

KiriminAja.init({
    apiKey: process.env.KIRIMINAJA_API_KEY,
    fetch, // provide your own fetch polyfill
});
```

## Usage

Coverage area:

```ts
const provinces = await KiriminAja.address.provinces();
const cities = await KiriminAja.address.cities(5);
```

Order:

```ts
const tracking = await KiriminAja.order.express.track("ORDER_ID");
const instantTracking = await KiriminAja.order.instant.track("ORDER_ID");
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.3. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
