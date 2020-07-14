module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/warnings",
    "plugin:import/errors",
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
  rules: {
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
  },
};
