module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  plugins: ["react", "react-hooks", "prettier", "import"],
  settings: {},
  rules: {},
};
