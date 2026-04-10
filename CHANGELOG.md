# Changelog


## v1.1.0

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.10...v1.1.0)

### 🚀 Enhancements

- Add GitHub Actions workflow for testing and building ([ce4f783](https://github.com/kiriminaja/node/commit/ce4f783))
- Enhance CI workflow with matrix testing for Bun and Node.js ([c2525e7](https://github.com/kiriminaja/node/commit/c2525e7))
- Update PricingInstantPayload to use InstantService type and define vehicle options ([68566e5](https://github.com/kiriminaja/node/commit/68566e5))
- Update service type in test and adjust vehicle option for instant service ([d248e25](https://github.com/kiriminaja/node/commit/d248e25))

### 🩹 Fixes

- Back to bun only ([98804bd](https://github.com/kiriminaja/node/commit/98804bd))
- Update getPricingExpress and getPricingInstant to use generic type for KAResponse ([bdb7774](https://github.com/kiriminaja/node/commit/bdb7774))
- Update service and vehicle options in pricingInstant example in README ([c18be46](https://github.com/kiriminaja/node/commit/c18be46))

### 💅 Refactors

- Consolidate request pickup methods into a single endpoint ([1c757b5](https://github.com/kiriminaja/node/commit/1c757b5))

### 🏡 Chore

- Update version to 1.0.0 and bump @types/node to ^25.6.0 ([703fba0](https://github.com/kiriminaja/node/commit/703fba0))

### 🎨 Styles

- Format tsconfig.json for improved readability ([0f1ed96](https://github.com/kiriminaja/node/commit/0f1ed96))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.10

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.9...v0.1.10)

### 🩹 Fixes

- Converting into vite since tsdown config not match our build expectations ([440397d](https://github.com/kiriminaja/node/commit/440397d))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.9

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.8...v0.1.9)

### 🚀 Enhancements

- Add path aliasing and update build process ([460f7c8](https://github.com/kiriminaja/node/commit/460f7c8))

### 💅 Refactors

- Update import statements to remove file extensions and improve code consistency; delete unused response types ([8e7093d](https://github.com/kiriminaja/node/commit/8e7093d))
- Update package configuration and build process ([3b21342](https://github.com/kiriminaja/node/commit/3b21342))

### 🏡 Chore

- Update typescript version to ^6.0.2 in package.json and bun.lock ([77aba83](https://github.com/kiriminaja/node/commit/77aba83))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.8

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.7...v0.1.8)

### 🚀 Enhancements

- Add runtime overrides for env and baseUrl in useKiriminAja ([f874617](https://github.com/kiriminaja/node/commit/f874617))

### 🩹 Fixes

- Improve error messages for SDK initialization and enhance useKiriminAja options handling ([ae1eea8](https://github.com/kiriminaja/node/commit/ae1eea8))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.7

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.6...v0.1.7)

### 🚀 Enhancements

- Initialize Nitro project with basic configuration and routing ([10bf26b](https://github.com/kiriminaja/node/commit/10bf26b))

### 💅 Refactors

- Update import paths to include file extensions and reorganize type definitions ([d83c1a8](https://github.com/kiriminaja/node/commit/d83c1a8))

### 🏡 Chore

- Update package.json to remove local dependency and clean up tsup config ([da875ef](https://github.com/kiriminaja/node/commit/da875ef))
- Update dependencies and improve TypeScript configuration ([1b37d56](https://github.com/kiriminaja/node/commit/1b37d56))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.6

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.5...v0.1.6)

### 🩹 Fixes

- Update @types/node version to ^25.5.0 in package.json and bun.lock ([3f3cf91](https://github.com/kiriminaja/node/commit/3f3cf91))

### 💅 Refactors

- Replace withApiKey function with direct apiKey usage in useKiriminAja for improved isolation and simplicity ([c5722f1](https://github.com/kiriminaja/node/commit/c5722f1))
- Simplify useKiriminAja by removing AsyncLocalStorage and related API key isolation logic ([131981a](https://github.com/kiriminaja/node/commit/131981a))

### ✅ Tests

- Add unit tests for withApiKey function to validate API key isolation and authorization header behavior ([c71a10e](https://github.com/kiriminaja/node/commit/c71a10e))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.5

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.4...v0.1.5)

### 🚀 Enhancements

- Add h3 adapter with plugin initialization and service access ([0a1d516](https://github.com/kiriminaja/node/commit/0a1d516))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.4

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.3...v0.1.4)

### 🩹 Fixes

- Downgrade typescript version to ^6.0.0 in bun.lock ([27e2699](https://github.com/kiriminaja/node/commit/27e2699))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.3

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.2...v0.1.3)

### 🩹 Fixes

- Update @types/bun and typescript versions in package.json and bun.lock ([70d0f27](https://github.com/kiriminaja/node/commit/70d0f27))
- Downgrade typescript version to ^6.0.0 in package.json ([ef35bd0](https://github.com/kiriminaja/node/commit/ef35bd0))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.2

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.1...v0.1.2)

### 🚀 Enhancements

- Update package json as public repo ([b98b1fc](https://github.com/kiriminaja/node/commit/b98b1fc))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.1

[compare changes](https://github.com/kiriminaja/node/compare/v0.1.0...v0.1.1)

### 🚀 Enhancements

- Update typescript declarations for all of api response ([6b7c045](https://github.com/kiriminaja/node/commit/6b7c045))
- Make codebase more-readable ([129ed7c](https://github.com/kiriminaja/node/commit/129ed7c))
- Add tsconfig build ([83b9507](https://github.com/kiriminaja/node/commit/83b9507))
- Open the package.json ([48b2336](https://github.com/kiriminaja/node/commit/48b2336))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

## v0.1.0


### 🚀 Enhancements

- Initialize project ([0e4be66](https://github.com/kiriminaja/node/commit/0e4be66))
- Prepare base code ([1496dc0](https://github.com/kiriminaja/node/commit/1496dc0))
- Split the api call to more smaller calls ([ff4b8e6](https://github.com/kiriminaja/node/commit/ff4b8e6))

### ❤️ Contributors

- Yanuar Aditia ([@ngalor](https://github.com/ngalor))

