# @wowvendor/eslint-config-typescript

> Production ready [ESLint](http://eslint.org) config using

## Install

### [yarn](https://yarnpkg.com)

```sh
yarn add eslint @wowvendor/eslint-config-base @wowvendor/eslint-config-typescript -D
```

### [npm](https://npmjs.com)

```sh
npm i -D eslint @wowvendor/eslint-config-base @wowvendor/eslint-config-typescript
```

## Usage

### Сreate a eslint config file type of your choice

`.eslintrc`

```json
{
  "extends": ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-typescript"]
}
```

`.eslintrc.js`

```js
module.exports = {
  extends: ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-typescript"],
};
```

`.eslintrc.json`

```json
{
  "extends": ["@wowvendor/eslint-config-base", "@wowvendor/eslint-config-typescript"]
}
```

### Plugins / Modules

- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
