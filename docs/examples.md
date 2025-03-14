## Examples

> See the [examples](https://github.com/imposter-project/imposter-js/tree/main/examples) directory for a Node.js project with many examples.

### Example with Jest

Here's an example using Jest:

```js
const {mocks} = require('@imposter-js/imposter');

jest.setTimeout(30000);

beforeAll(async () => {
    // path to Imposter config directory
    const configDir = `/path/to/order-api`;

    // start a mock on a specific port
    await mocks.start(configDir, 8080);
});

afterAll(async () => {
    mocks.stopAll();
});

it('places an order', async () => {
    // configure the unit under test
    const orderService = new OrderService('http://localhost:8080/orders');

    // call your unit under test, which invokes the mock
    const confirmation = await orderService.placeOrder('product-05');

    // assert values returned by the mock
    expect(confirmation.total).toEqual(18.00);
});
```

### Example using just an OpenAPI file

Here's an example mock that just uses an OpenAPI file:

```js
// start a mock from a bare OpenAPI spec file
// requests are validated against the spec
const mock = await mocks.builder()
    .withOpenApiSpec('/path/to/pet-names-api.yaml')
    .withRequestValidation()
    .start();

// call the mock
const response = await axios.get(`${mock.baseUrl()}/names`);

// Output: [ 'Fluffy', 'Paws' ]
// This is driven by either the 'examples' property
// in the OpenAPI spec, or the schema of the response.
console.log(response.data);
```

### Example with no config file

Here's an example mock that doesn't require any configuration file:

```js
const builder = mocks.builder().withPlugin('rest');

// add a POST resource with a path parameter
const resource = builder.addResource('/users/{userName}', 'POST');

// capture the userName path parameter from the request
// for later use in the response
resource.captures().fromPath('userName');

// respond with a templated message indicating the user
// was created by name
resource.responds(201)
    .withTemplateData('${request.userName} registered')
    .withHeader('Content-Type', 'text/plain');

// spin it up
const mock = await builder.start();

// call the mock
const response = await axios.post(`${mock.baseUrl()}/users/alice`);

// Output: alice registered
// This will vary dynamically, based on the request.
console.log(response.data);
```
