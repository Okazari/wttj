/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTestsAfterEnv.ts"],
  moduleNameMapper: {
    "core/(.*)$": "<rootDir>/src/core/$1",
  },
};
