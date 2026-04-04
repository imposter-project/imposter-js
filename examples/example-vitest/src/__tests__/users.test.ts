import {UserService} from "../users";
import {afterAll, beforeAll, describe, expect, it} from 'vitest';
import {mocks} from "@imposter-js/imposter";

/**
 * Tests for user-service mock
 *
 * A mock defined entirely within the test - no OpenAPI specification,
 * no Imposter configuration - all configured within the Vitest test.
 *
 * In your own project import with either:
 *   import {mocks} from "@imposter-js/imposter";
 * or:
 *   const {mocks} = require("@imposter-js/imposter");
 */

describe('user service', () => {
    let userService: UserService;

    beforeAll(async () => {
        const builder = mocks.builder().withPlugin('rest');

        // add a POST resource with a path parameter
        const resource = builder.addResource('/users/{userName}', 'POST');

        // capture the userName path parameter from the request
        // for later use in the response
        resource.captures().fromPath('userName');

        // respond with a templated message indicating the user
        // was created by name
        resource.responds(201)
            .withTemplateData('${stores.request.userName} registered')
            .withHeader('Content-Type', 'text/plain');

        const mock = await builder.start();

        // set the base URL for the service
        userService = new UserService(mock.baseUrl());
    });

    afterAll(async () => {
        mocks.stopAll();
    });

    it('adds a user', async () => {
        const response = await userService.addUser('alice');
        expect(response).toEqual('alice registered');
    });
});
