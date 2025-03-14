import {PetStore} from "../index";
import {afterAll, beforeAll, expect, it, jest} from '@jest/globals';
import {mocks} from "@imposter-js/imposter";

/**
 * Tests for the application
 *
 * A simple application that chains calls for some of the services.
 *
 * In your own project import with either:
 *   import {mocks} from "@imposter-js/imposter";
 * or:
 *   const {mocks} = require("@imposter-js/imposter");
 */

const apisToMock = [
    'stock',
    'order',
];

jest.setTimeout(30000);

describe('petstore application', () => {
    let app: PetStore;

    beforeAll(async () => {
        // spin up a mock for each API
        const mockPromises = {};
        for (const apiName of apisToMock) {
            const configDir = `./apis/${apiName}-api`;
            mockPromises[apiName] = mocks.start(configDir);
        }

        // wait for mocks to come up, then get URL
        const baseUrls = {};
        for (const apiName of apisToMock) {
            const mock = await mockPromises[apiName];
            baseUrls[apiName] = mock.baseUrl();
        }

        // configure app with endpoints
        app = new PetStore(baseUrls)
    });

    afterAll(async () => {
        mocks.stopAll();
    });

    it('order item in stock', async () => {
        const confirmation = await app.orderFirstItemInStock();
        expect(confirmation.total).toEqual(13.00);
    });
});
