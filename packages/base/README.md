# @wowvendor/eslint-config-base

> Production ready [ESLint](http://eslint.org) config using

## Install

### [yarn](https://yarnpkg.com)

```sh
yarn add eslint @wowvendor/eslint-config-base -D
```

### [npm](https://npmjs.com)

```sh
npm i -D eslint @wowvendor/eslint-config-base
```

## Usage

### Сreate a eslint config file type of your choice

`.eslintrc`

```json
{
  "extends": "@wowvendor/eslint-config-base"
}
```

`.eslintrc.js`

```js
module.exports = {
  extends: ["@wowvendor/eslint-config-base"],
};
```

`.eslintrc.json`

```json
{
  "extends": ["@wowvendor/eslint-config-base"]
}
```

### Plugins / Modules

- babel-eslint
- eslint-plugin-jest
- eslint-plugin-import
- eslint-config-prettier
- eslint-plugin-eslint-comments
