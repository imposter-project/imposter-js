import {logger} from "./logger";
import {MockManager} from "./mock-manager";

const defaultMockManager = new MockManager();

export default () => {
    logger.warn(`Using the default export is deprecated.
Use:
  import {mocks} from '@imposterjs/imposter';
or:
  const {mocks} require('@imposterjs/imposter');
`);
    return defaultMockManager;
};

export {defaultMockManager as mocks};
