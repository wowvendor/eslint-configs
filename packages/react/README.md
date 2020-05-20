# @wowvendor/eslint-config-react

> Production ready [ESLint](http://eslint.org) config using

## Install

### [yarn](https://yarnpkg.com)

```sh
yarn add eslint @wowvendor/eslint-config-base @wowvendor/eslint-config-react -D
```

### [npm](https://npmjs.com)

```sh
npm i -D eslint @wowvendor/eslint-config-base @wowvendor/eslint-config-react
```

## Usage

### Сreate a eslint config file type of your choice

`.eslintrc`

```json
{
  "extends": ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-react"]
}
```

`.eslintrc.js`

```js
module.exports = {
  extends: ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-react"],
};
```

`.eslintrc.json`

```json
{
  "extends": ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-react"]
}
```

### Plugins / Modules

- eslint-plugin-react
- eslint-plugin-jsx-a11y
- eslint-plugin-react-hooks
- eslint-config-prettier
