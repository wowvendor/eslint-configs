const eslint = require("eslint");
const path = require("path");

describe("test eslint config", () => {
  it("eslint should pass without errors and no warnings", async () => {
    const srcPath = path.resolve(__dirname, "../");
    const input = [path.resolve(srcPath, "example.js")];
    const linter = new eslint.ESLint({
      useEslintrc: false,
      reportUnusedDisableDirectives: "error",
      baseConfig: require(path.resolve(srcPath, "index.js")),
    });

    const output = await linter.lintFiles(input);

    expect(
      output.flatMap(({ messages }) =>
        messages.map(({ line, column, ruleId, message }) => `${line}:${column} ${message} ${ruleId}`),
      ),
    ).toStrictEqual([]);
  });
});
