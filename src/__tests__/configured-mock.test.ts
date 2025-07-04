import {beforeAll, expect, it} from '@jest/globals';
import {Utils} from "../configured-mock";
import {versionReader} from "../version";
import net from "net";
import fs from "fs";
import path from "path";
import os from "os";

/**
 * The majority of coverage for `ConfiguredMock` comes via
 * the `MockBuilder` tests and the end-to-end tests.
 */

const utils = new Utils();

beforeAll(() => {
    return versionReader.initIfRequired();
});

it('generates debug advice', async () => {
    const expected = `
See log file: /tmp/example
Consider setting .verbose() on your mock for more details.
Run 'imposter doctor' to diagnose engine issues.`

    expect(utils.buildDebugAdvice(true, false, '/tmp/example', false)).toEqual(expected);
});

it('generates debug advice with log', async () => {
    const tempDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'test-'));
    const tempFilePath = path.join(tempDir, 'log.txt');
    await fs.promises.writeFile(tempFilePath, 'Example log');

    const expected = `
See log file: ${tempFilePath}
----------------------------------------
Example log
----------------------------------------
Consider setting .verbose() on your mock for more details.
Run 'imposter doctor' to diagnose engine issues.`

    expect(utils.buildDebugAdvice(true, false, tempFilePath, true)).toEqual(expected);
});

it('writes chunk to console', async () => {
    let consoleOutput = '';
    const fakeConsole = (chunk: string) => {
        consoleOutput += chunk;
    };

    utils.writeChunk('foo', true, false, fakeConsole, null);

    expect(consoleOutput).toEqual('foo');
});

it('writes chunk to stream', async () => {
    let consoleOutput = '';
    const fakeStream = {
        write(chunk: string) {
            consoleOutput += chunk;
        }
    };

    utils.writeChunk('foo', false, true, console.debug, fakeStream);

    expect(consoleOutput).toEqual('foo');
});

it('assigns free port', async () => {
    const freePort = await utils.assignFreePort();

    expect(freePort).toEqual(expect.any(Number));

    const srv = net.createServer();
    let listened = false;
    try {
        listened = await new Promise((resolve, reject) => {
            try {
                srv.listen(freePort, () => resolve(true));
            } catch (e) {
                reject(e);
            }
        });
    } finally {
        srv.close();
    }

    expect(listened).toBeTruthy();
});

it('sleeps', async () => {
    const expectedDurationMs = 50;
    const skew = 5;
    const start = new Date().getTime();

    await utils.sleep(expectedDurationMs);

    const now = new Date().getTime();
    expect(now + skew).toBeGreaterThanOrEqual(start + expectedDurationMs);
});
