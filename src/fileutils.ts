import path, {dirname} from "path";
import fs, {constants} from "fs";
import {versionReader} from "./version";

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
        for (let path of module.paths) {
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
     * Searches the current working directory and the module's project directory
     * for a CLI configuration file.
     */
    discoverLocalConfig = (searchPaths: string[] | null = null): string | null => {
        return versionReader.runIfVersionAtLeast(0, 6, 0, () => {
            const sp = searchPaths || [
                this.getPkgJsonDir(),
                process.cwd(),
            ] as string[];
            const configs = sp
                .map(searchPath => path.join(searchPath, 'imposter.config.json'))
                .filter(fs.existsSync);

            return configs.length > 0 ? configs[0] : null;
        });
    }

    /**
     * Determine the path to the module's project directory.
     */
    getPkgJsonDir = (): string => {
        if (!this._initialised) {
            throw new Error('initIfRequired() not called');
        }
        return this._pkgJsonDir as string;
    }
}

const fileUtils = new FileUtils();

export {fileUtils};
