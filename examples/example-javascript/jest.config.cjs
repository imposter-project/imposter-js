module.exports = {
    clearMocks: false,
    collectCoverage: false,
    coverageDirectory: "coverage",
    coverageProvider: "v8",

    testEnvironment: "node",
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.test.js",
    ],

    maxWorkers: 2,
};
