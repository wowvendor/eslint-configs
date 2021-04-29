module.exports = {
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        //Checked by Typescript - ts(2378)
        "getter-return": "off",
        // Checked by Typescript - ts(2300)
        "no-dupe-args": "off",
        // Checked by Typescript - ts(1117)
        "no-dupe-keys": "off",
        // Checked by Typescript - ts(7027)
        "no-unreachable": "off",
        // Checked by Typescript - ts(2367)
        "valid-typeof": "off",
        // Checked by Typescript - ts(2588)
        "no-const-assign": "off",
        // Checked by Typescript - ts(2588)
        "no-new-symbol": "off",
        // Checked by Typescript - ts(2376)
        "no-this-before-super": "off",
        // This is checked by Typescript using the option `strictNullChecks`.
        "no-undef": "off",
        // This is already checked by Typescript.
        "no-dupe-class-members": "off",
        // This is already checked by Typescript.
        "no-redeclare": "off",
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust
        "default-case": "off",

        /**
         * If adding a typescript-eslint version of an existing ESLint rule,
         * make sure to disable the ESLint rule here.
         */
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",

        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: [
              "public-static-field",
              "public-static-method",
              "public-instance-field",
              "public-constructor",
              "public-instance-method",
              "protected-static-field",
              "protected-static-method",
              "protected-instance-field",
              "protected-constructor",
              "protected-instance-method",
              "private-static-field",
              "private-static-method",
              "private-instance-field",
              "private-constructor",
              "private-instance-method",
            ],
          },
        ],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            classes: true,
            functions: false,
            variables: false,
            typedefs: false,
          },
        ],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
      },
    },
  ],
};
