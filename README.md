# @gregoralbrecht/eslint-config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![npm (scoped)](https://img.shields.io/npm/v/@gregoralbrecht/eslint-config)

A simple ESLint configuration for React projects. Although this project is deployed with `semantic-release` for convenience, there's nothing really semantic about the versioning. [Use these commit message conventions.](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint)

## Installation

Install using `yarn`:

```sh
yarn add -D eslint prettier @gregoralbrecht/eslint-config
```

Then extend our ESLint config `.eslintrc.js`:

```js
module.exports = {
  extends: ["@gregoralbrecht/eslint-config"],
};
```
