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
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "eslint",
        writerOpts: {
          commitsSort: ["scope"],
        },
      },
    ],
  ],
};
