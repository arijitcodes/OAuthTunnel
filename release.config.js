const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = {
  branches: ["main"],
  repositoryUrl: "git@github.com:arijitcodes/OAuthTunnel.git", // Use SSH URL here
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        writerOpts: {
          commitPartial: readFileSync(
            join(__dirname, "./configs/semantic-release/commit-template.hbs"),
            "utf-8"
          ),
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package*.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
