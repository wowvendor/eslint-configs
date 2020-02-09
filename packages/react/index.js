module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["jsx-a11y", "react", "react-hooks"],
  extends: ["plugin:jsx-a11y/recommended", "plugin:react/recommended"],
  rules: {
    // Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    // React
    "react/prop-types": "off",
    "react/no-typos": "error",
    "react/display-name": "off",
    "react/no-multi-comp": "error",
    "react/no-unused-state": "error",
    "react/jsx-boolean-value": "error",
    "react/no-did-update-set-state": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-redundant-should-component-update": "error",
    "react/self-closing-comp": ["error", { html: true, component: true }],
    "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }],
    "react/boolean-prop-naming": ["error", { rule: "^(is|has|show|should)[A-Z]([A-Za-z0-9]?)+" }],
  },
};
