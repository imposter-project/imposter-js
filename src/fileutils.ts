import path, {dirname} from "path";
import fs, {constants} from "fs";
import {versionReader} from "./version";
import {nodeConsole} from "./console";

class FileUtils {
    private _initialised: boolean = false;
    private _pkgJsonDir: string | null = null;

    initIfRequired = async () => {
        await versionReader.initIfRequired();

        if (!this._initialised) {
            this._pkgJsonDir = await this.detectPackageJsonDir();
            this._initialised = true;
        }
    }

    /**
     * Attempt to detect the project root directory by searching for a package.json file.
     */
    private async detectPackageJsonDir(): Promise<string | null> {
        let paths: string[];
        if (typeof require !== 'undefined') {
            // CommonJS: Use module.paths
            paths = module.paths;
            nodeConsole.trace("Searching module.paths for package.json, since using CommonJS");
        } else {
            // not supported in ESM
            paths = [];
            nodeConsole.trace("Skipping automatic package.json detection, since using ESM");
        }
        for (let path of paths) {
            try {
                let prospectivePkgJsonDir = dirname(path);
                await fs.promises.access(path, constants.F_OK);
                return prospectivePkgJsonDir;
            } catch (ignored) {
            }
        }
        return null;
    }

    /**
     * Searches the specified paths for a CLI configuration file.
     * If not specified, and using CommonJS, the module's project directory
     * and the working directory are searched.
     */
    discoverLocalConfig = (searchPaths: string[] | null = null): string | null => {
        return versionReader.runIfVersionAtLeast(0, 6, 0, () => {
            const sp: string[] = [];
            if (searchPaths) {
                sp.push(...searchPaths);
            } else {
                const jsonPkgDir = this.getPkgJsonDir();
                if (jsonPkgDir) {
                    sp.push(jsonPkgDir);
                }
                sp.push(process.cwd());
            }

            const configs = sp
                .map(searchPath => path.join(searchPath, 'imposter.config.json'))
                .filter(fs.existsSync);

            return configs.length > 0 ? configs[0] : null;
        });
    }

    /**
     * Determine the path to the module's project directory.
     */
    getPkgJsonDir = (): string | null => {
        if (!this._initialised) {
            throw new Error('initIfRequired() not called');
        }
        return this._pkgJsonDir;
    }
}

const fileUtils = new FileUtils();

export {fileUtils};
