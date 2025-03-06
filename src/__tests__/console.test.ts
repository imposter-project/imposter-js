import {describe, expect, it} from '@jest/globals';
import {logger} from "../logger";

describe('console', () => {
    it('returns the console', () => {
        expect(logger).toBeTruthy();
        expect(logger.info).toBeTruthy();
    });
});
