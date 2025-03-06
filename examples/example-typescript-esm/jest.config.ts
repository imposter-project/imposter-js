import { createDefaultEsmPreset } from "ts-jest";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...createDefaultEsmPreset({
    tsconfig: "tsconfig.test.json",
  }),
  testMatch: ["**/__tests__/**/*.(spec|test).(js|ts)"],
  testEnvironment: "node",
  collectCoverage: false,
  coverageProvider: "v8",
  coverageReporters: ["json", "html", "lcov", "text"],
};
