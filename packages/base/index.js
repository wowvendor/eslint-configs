module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.{spec,test}.{js,jsx,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,jsx,ts,tsx}"],
      env: {
        jest: true,
        "jest/globals": true,
      },
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "padding-line-between-statements": "off",
      },
    },
  ],
  plugins: ["eslint-comments", "import"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    // General
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-keys": "error",

    // Best Practices
    "linebreak-style": ["error", "unix"],
    "array-callback-return": "error",
    complexity: ["error", 6],
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "allow-null"],
    "no-eval": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-else-return": "error",
    "no-invalid-this": "off",
    "no-return-await": "error",
    "no-empty-function": "error",
    "no-div-regex": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-labels": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-void": "error",
    "no-with": "error",
    radix: "error",
    "require-await": "error",
    yoda: "error",

    // Variables
    "no-label-var": "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "no-use-before-define": [
      "error",
      {
        classes: true,
        functions: false,
        variables: false,
      },
    ],

    // Node.js
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-restricted-modules": "error",

    // ESLint CommentsPreview Plugin
    "eslint-comments/no-aggregating-enable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",

    // Stylistic Issues
    "consistent-this": "error",
    "max-lines": [
      "error",
      {
        max: 250,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    "no-array-constructor": "error",
    "no-empty-character-class": "error",
    "no-new-object": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: "export", next: ["const", "let", "var"] },
      { blankLine: "any", prev: ["const", "let", "var"], next: "export" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
    ],

    // Legacy
    "no-bitwise": "error",

    // Possible Error
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",

    // ECMAScript 6
    "no-var": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "prefer-rest-params": "error",
    "no-duplicate-imports": "error",
    "prefer-destructuring": ["error", { object: true, array: false }],

    // Imports
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "import/no-dynamic-require": "off",
    "import/no-default-export": "off",
    "import/prefer-default-export": "off",
    "import/newline-after-import": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        groups: [["external", "builtin"], "internal", "parent", "sibling", "index"],
      },
    ],
  },
};
