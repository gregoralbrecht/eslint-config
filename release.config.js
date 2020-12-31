module.exports = {
  branches: ["main"],
  preset: "eslint",
  plugins: [
    "@semantic-release/npm",
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "eslint",
      },
    ],
  ],
};
