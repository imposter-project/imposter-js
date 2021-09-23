import {exec} from "child_process";

class VersionReader {
    /**
     * @private {string}
     */
    _versionOutput;

    /**
     * Determines the version of the CLI subcomponent.
     *
     * @param componentName {string}
     * @returns {Promise<object>}
     */
    async determineVersion(componentName) {
        if (!this._versionOutput) {
            this._versionOutput = await this.invokeVersionCommand();
        }
        try {
            /*
             * Parse CLI output in the form:
             *
             * imposter-cli 0.1.0
             * imposter-engine 0.1.0
             *
             * ...filtering by componentName, into an array of Strings containing the SemVer components:
             * [ "0", "1", "0" ]
             */
            const version = this._versionOutput.split('\n')
                .filter(line => line.match(componentName))
                .map(cliVersion => cliVersion.split(' ')[1].trim().split('.'))[0];

            return {
                major: Number(version[0]),
                minor: Number(version[1]),
                revision: Number(version[2]),
            };

        } catch (e) {
            throw new Error(`Error parsing version: ${e}`);
        }
    }

    invokeVersionCommand() {
        return new Promise((resolve, reject) => {
            try {
                exec('imposter version', (error, stdout, stderr) => {
                    const output = `${stdout}\n${stderr}`;
                    if (error) {
                        reject(new Error(`Error determining version: ${error}\n${output}`));
                    }
                    resolve(output);
                });
            } catch (e) {
                reject(new Error(`Error spawning Imposter process: ${e}`));
            }
        })
    }

    /**
     * Determine the version of the CLI.
     *
     * @returns {Promise<object>}
     */
    determineCliVersion() {
        return this.determineVersion(/imposter-cli/);
    }

    /**
     * Runs the `block` if the CLI version is equal to or greater than the specified version.
     *
     * @param major {number}
     * @param minor {number}
     * @param block {function}
     * @param orElseBlock {function}
     * @returns {Promise<*|undefined>}
     */
    async runIfVersionAtLeast(major, minor, block, orElseBlock = undefined) {
        const cliVersion = await this.determineCliVersion();
        if (cliVersion.major >= major && cliVersion.minor >= minor) {
            return await block();
        } else if (orElseBlock) {
            return await orElseBlock();
        }
        return undefined;
    }
}

const versionReader = new VersionReader();

export {versionReader};
