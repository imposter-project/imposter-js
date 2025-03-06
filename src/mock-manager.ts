import {MockBuilder} from "./mock-builder";
import {ConfiguredMock} from "./configured-mock";
import {setLogVerbose} from "./logger";

export class MockManager {
    private _mocks: ConfiguredMock[] = [];

    prepare = (configDir: string, port: number | null = null, env: Record<string, string> = {}, projectRootDir: string | null = null): ConfiguredMock => {
        const mock = new ConfiguredMock(configDir, port, env, projectRootDir);
        this._mocks.push(mock);
        return mock;
    }

    /**
     * Start a mock using the Imposter configuration within `configDir`, listening
     * on `port`.
     *
     * This is a convenience function that has limited options. Consider using `MockBuilder` instead:
     *
     * ```
     * const {mocks}
     * ```
     */
    start = (configDir: string, port: number | null = null, env: Record<string, string> = {}): Promise<ConfiguredMock> => {
        return this.prepare(configDir, port, env).start();
    }

    stopAll = () => {
        this._mocks.forEach(mock => mock.stop());
    }

    builder = (): MockBuilder => {
        return new MockBuilder(this);
    }

    verbose = (): MockManager => {
        setLogVerbose(true);
        return this;
    }
}
