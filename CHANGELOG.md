## [1.1.1](https://github.com/arijitcodes/OAuthTunnel/compare/v1.1.0...v1.1.1) (2025-02-23)


### Bug Fixes

✅ **dockerfile:** fixes Dockerfile ([f7fa625](https://github.com/arijitcodes/OAuthTunnel/commit/f7fa6259cf1596caa60d8cc5715d50a2b03da5c4)), closes [#1](https://github.com/arijitcodes/OAuthTunnel/issues/1)  

Fixes the Dockerfile setup <br/><br/>

# [1.1.0](https://github.com/arijitcodes/OAuthTunnel/compare/v1.0.0...v1.1.0) (2025-02-23)


### Bug Fixes

✅ **dockerfile, docker-compose.yaml:** fixed Docker Setup ([f99636e](https://github.com/arijitcodes/OAuthTunnel/commit/f99636e7bad997dd297706c0d6594a49d4a5fba2)), closes [#1](https://github.com/arijitcodes/OAuthTunnel/issues/1)  

- Fixed bugs in Dockerfile
- Fixed docker-compose.yaml <br/><br/>
  


### Features

✅ **src/server.js:** added 404 and Error Handling Middleware ([738a3c3](https://github.com/arijitcodes/OAuthTunnel/commit/738a3c3f1b4bd91f6182c6407c8f2954415df812))  

Added a Catch-all route for unmatched routes to respond with Error 404 & added a Central Error
handling middleware of Express. <br/><br/>

# 1.0.0 (2025-02-23)


### Features

✅ **semantic-release & changelog.md:** setup Semantic Release for Auto Changelog ([869a2ef](https://github.com/arijitcodes/OAuthTunnel/commit/869a2ef4d094d5cdfce37a5f7debfb08b6ae3904))  

Setup Semantic-Release with Commitizen to generate change logs in CHANGELOG.md file automatically
based on the commit messages - which shall be Conventiona Commits. <br/><br/>
