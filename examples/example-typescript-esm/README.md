Sample project for Imposter with Jest, using TypeScript and ECMAScript modules (ESM)
=====================================================================================

## Prerequisites

- Node.js 20+
- [Imposter CLI](https://github.com/imposter-project/imposter-cli)

**Important:** Ensure you have built the parent module, on which this sample depends:

    npm run prep-example

This builds the `@imposter-js/imposter` package and updates the dependency in `package.json` to point to it.

## Instructions

Run tests as follows:

	npm install
    npm test

## API details

The following APIs are mocked:

### order-api

Defined using OpenAPI specifications under the `apis/order-api` directory.

The directory also contains Imposter configuration files, as well as dynamic scripts to synthesise an order confirmation.

### pet-name-api

A bare directory under `apis/pet-name-api` containing only an OpenAPI file, with the Imposter configuration generated when the mock starts.

### stock-api

Defined using OpenAPI specifications under the `apis/stock-api` directory.

The directory also contains Imposter configuration files, but no dynamic scripts.

### user-api

A mock defined entirely within the [Jest test](src/__tests__/users.test.ts) - no OpenAPI specification, no Imposter configuration - all configured within the Jest test.

## Application details

A simple application is defined in `index.ts` that chains calls for some of the above services.
