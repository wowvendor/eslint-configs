const eslint = require("eslint");
const path = require("path");

const srcPath = path.resolve(__dirname, "../");

describe("test eslint config", () => {
  it("eslint should pass without errors and no warnings", () => {
    const input = [path.resolve(srcPath, "index.js"), path.resolve(__dirname, __filename)];

    const output = new eslint.CLIEngine({
      useEslintrc: false,
      envs: ["es6", "node"],
      configFile: path.resolve(srcPath, "index.js"),
    }).executeOnFiles(input);

    input.forEach((file, index) => {
      expect(output.results[index].filePath.endsWith(file)).toBeTruthy();
    });

    expect(output.errorCount).toBe(0);
    expect(output.warningCount).toBe(0);
  });
});
