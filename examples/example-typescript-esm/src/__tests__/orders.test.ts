import {afterAll, beforeAll, expect, it, jest} from '@jest/globals';
import {OrderService} from "../orders";
import {mocks} from "@imposter-js/imposter";

/**
 * Tests for order-service mock.
 *
 * Defined using OpenAPI specifications under the `apis/order-api` directory.
 * The directory also contains Imposter configuration files, as well as dynamic scripts to synthesise
 * an order confirmation.
 *
 * In your own project import with either:
 *   import {mocks} from "@imposter-js/imposter";
 * or:
 *   const {mocks} = require("@imposter-js/imposter");
 */

jest.setTimeout(30000);

describe('order service', () => {
    let orderService: OrderService;

    beforeAll(async () => {
        const configDir = `./apis/order-api`;
        const mock = await mocks.start(configDir);

        // set the base URL for the service
        orderService = new OrderService(mock.baseUrl());
    });

    afterAll(async () => {
        mocks.stopAll();
    });

    it('places an order', async () => {
        const orderItems = [
            {sku: "fb01"},
            {sku: "br06"},
        ];
        const confirmation = await orderService.placeOrder(orderItems);
        expect(confirmation.total).toEqual(18.00);
    });
});
