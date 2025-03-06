import * as nodeConsole from "console";

let logVerbose = false;

export const setLogVerbose = (verbose: boolean) => {
    logVerbose = verbose;
};

export const isLogVerbose = () => {
    return logVerbose;
};

/**
 * Don't use the global console - this gets
 * overridden by Jest and makes output chatty.
 */
export const logger = {
    log: nodeConsole.log,
    info: nodeConsole.info,
    warn: nodeConsole.warn,
    error: nodeConsole.error,
    debug: nodeConsole.debug,
    trace: (message?: any, ...optionalParams: any[]): void => {
        if (logVerbose) {
            // raise to debug level; we don't want to see the stacktrace with the message
            nodeConsole.debug(message, ...optionalParams);
        }
    }
}
