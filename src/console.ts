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
export const nodeConsole = require("console");

nodeConsole.trace = (message?: any, ...optionalParams: any[]): void => {
    if (logVerbose) {
        // raise to debug level; we don't want to see the stacktrace with the message
        console.debug(message, ...optionalParams);
    }
}
