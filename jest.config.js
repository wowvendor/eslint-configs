// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: false,
  testEnvironment: "node",
  projects: ["<rootDir>/packages/*"],
  testMatch: ["**/*.test.(js|ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js"],
};
