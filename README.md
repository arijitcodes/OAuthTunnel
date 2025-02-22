# OAuthTunnel

OAuthTunnel is a lightweight proxy server for forwarding OAuth callbacks to your local backend during development.

Author: [Arijit Banerjee](#author) <br/>
License: [MIT](./LICENSE.md)

<!-- shields.io Badges -->

<!-- Websites / Links - Up / Down -->

[![GitHub Repository Link](https://img.shields.io/website?url=https%3A%2F%2Fgithub.com%2Farijitcodes%2FOAuthTunnel&style=for-the-badge&logo=github&label=repository&labelColor=%23232323)](https://github.com/arijitcodes/OAuthTunnel) &nbsp;&nbsp;

<!-- NPM Badges -->

<!-- GitHub Badges -->

[![GitHub License](https://img.shields.io/github/license/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel/blob/main/LICENSE) &nbsp;
[![GitHub language count](https://img.shields.io/github/languages/count/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=%23232323&color=%23404040)](https://github.com/arijitcodes/OAuthTunnel) &nbsp;
[![GitHub top language](https://img.shields.io/github/languages/top/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=%23232323)](https://github.com/arijitcodes/OAuthTunnel) &nbsp;
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/arijitcodes/OAuthTunnel/main?style=for-the-badge&logo=github&labelColor=%23232323)](https://github.com/arijitcodes/OAuthTunnel/commits/main) &nbsp;

[![GitHub contributors](https://img.shields.io/github/contributors/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel/graphs/contributors) &nbsp;
[![GitHub pull requests](https://img.shields.io/github/issues-pr/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel/pulls) &nbsp;
[![GitHub issues](https://img.shields.io/github/issues/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel/issues) &nbsp;
[![GitHub repo size](https://img.shields.io/github/repo-size/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel) &nbsp;
[![GitHub code size](https://img.shields.io/github/languages/code-size/arijitcodes/OAuthTunnel?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/OAuthTunnel) &nbsp;

<!-- Others -->

<!-- [![Semantic-Release Badge](https://img.shields.io/badge/semantic--release-e10079?style=for-the-badge&logo=semantic-release&labelColor=%23232323)](https://github.com/semantic-release/semantic-release) &nbsp;
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen?style=for-the-badge&labelColor=%23232323&color=brightGreen)](https://commitizen.github.io/cz-cli/) &nbsp;
[![Conventional Commits Badge](https://img.shields.io/badge/conventional_commits-404040?style=for-the-badge&logo=conventionalcommits&labelColor=%23232323&color=%23404040)](https://www.conventionalcommits.org) &nbsp; -->

<hr>

## Table of Contents

- [Features](#features)
- [Author](#author)
- [Setup](#setup)
- [Usage](#usage)
- [Functionalities and Technologies Used](#functionalities-and-technologies-used)
- [From the Developer](#from-the-developer)
- [Tips](#tips)
- [Contributing](#contributing)
- [License](#license)

<hr>

## Features

- 🚀 **Dynamic Routing**: Forwards callbacks based on the `state` parameter, allowing flexible and dynamic routing during OAuth flows.
- 🛠️ **Development-Only**: Specifically designed for local development environments to simplify OAuth integration without exposing your local server.
- 🐳 **Docker Support**: Easily deployable using Docker, making setup and teardown a breeze.

<hr>

## Author

Author : [Arijit Banerjee](https://www.github.com/ArijitCodes)

About : Full Stack Web Developer | Cyber Security Enthusiast | Actor

Social Media : &nbsp;
[![Instagram](https://i.ibb.co/4t76vTc/insta-transparent-14px.png) Instagram](https://www.instagram.com/arijit.codes)
&nbsp;
[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/arijitban)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/ArijitCodes)
&nbsp;
[![Website](https://i.ibb.co/wCV57xR/Internet-1.png) Website](https://iamarijit.dev)

Email: arijit.codes@gmail.com

<hr>
<!-- 
## Live Demo

For a Live Demo, check : [https://oauth.devworks.abc.dev](https://oauth.devworks.abc.dev)

<hr> -->

## Setup

1. 🛠️ Clone the repo.
2. 📦 Run `bun i` to install dependencies.
3. 🚀 Start the server with `docker compose up`.

<hr>

## Usage

- Register the proxy server's callback URL (e.g., `https://oauth.example.com/auth/google/callback`) with OAuth providers. Note that `oauth.example.com` is just an example subdomain.
- When initiating the OAuth flow in your Passport.js setup, include `localIP`, `clientType`, and `localPort` in the `state` parameter if `NODE_ENV` is `development`. This setup is specifically for development environments. For example, your implementation of the OAuth provider auth route using Passport.js should look like this:

  ```javascript
  router.get("/:provider", (req, res, next) => {
    const provider = req.params.provider;
    const clientType = req.query.client_type; // 'web' or 'mobile'

    let state = { clientType };

    // Add development-specific data
    if (process.env.NODE_ENV === "development") {
      state = {
        ...state,
        localIP: process.env.LOCAL_IP || "192.168.xx.xx",
        localPort: process.env.LOCAL_PORT || 5000,
      };
    }

    passport.authenticate(provider, {
      scope: oauthProviders[provider].scope,
      state: encodeURIComponent(JSON.stringify(state)),
    })(req, res, next);
  });
  ```

<hr>

## Functionalities and Technologies Used

`Stack` : MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)

`Technologies Used` : NodeJS, ExpressJS, ReactJS, MongoDB, Mongoose, Passport.js, JWT, Docker, Nginx, etc.

`Functionalities` :

- 🌐 **OAuth Providers**: Supports multiple OAuth providers (Google, GitHub, etc.), making it easy to integrate with various authentication services.
- 🔄 **Dynamic Callback Handling**: Uses a subdomain to forward OAuth callbacks to the local backend during development, ensuring seamless integration.
- 🌍 **Environment-Specific Logic**: Configures different callback URLs for development and production environments, adapting to your deployment needs.
- 📡 **Dynamic IP Handling**: Updates local IP dynamically for forwarding callbacks, accommodating changes in your development environment.

<hr>

## From the Developer:

This project aims to simplify OAuth authentication during local development by using a subdomain to handle callback URLs dynamically. It supports multiple OAuth providers and local authentication with JWT tokens.

### Context:

I was working on implementing a Passport.js OAuth authentication system for a web and mobile application. The goal was to support multiple OAuth providers (e.g., Google, GitHub) and local email/password authentication, all while using JWT for session management instead of Passport sessions. The backend was built with Express.js, the web app with React, and the mobile app with React Native (Expo).

### Original Goal:

- Allow users to log in via OAuth providers (Google, GitHub, etc.) or local email/password.
- Use JWT tokens for authentication instead of Passport sessions.
- Support both web and mobile clients with a unified authentication flow.
- Avoid hardcoding callback URLs for each provider and make the system scalable for future OAuth providers.

### Challenges Faced:

#### Local Development Issues:

- During development, the mobile app couldn’t connect to the backend running on localhost because it was on a different device.
- Using the local IP (e.g., 192.168.xx.xx) worked for the mobile app but caused issues with OAuth providers because they require a publicly accessible callback URL.

#### Callback URL Mismatch:

- OAuth providers (e.g., Google, GitHub) require a registered callback URL.
- Google allows multiple callback URLs but does not allow IP addresses (only localhost or top-level domain names).
- GitHub allows only one callback URL but does allow IP addresses.
- This made it impossible to use both localhost and a local IP for development without constantly updating the registered callback URL.

### Solutions Explored:

#### Subdomain as a Proxy:

- The subdomain (https://oauth.example.com) would act as a proxy to forward OAuth callbacks to the local backend. Note that `oauth.example.com` is just an example subdomain.
- The state parameter would include clientType (web/mobile), localIP (for development), and localPort.

#### Environment-Specific Configuration:

- The callbackURL in the Passport strategy configuration would be set dynamically based on the environment (NODE_ENV).
- In development, the subdomain would forward callbacks to the local backend.
- In production, the callbackURL would be set to the production callback URL (e.g., https://api.production.com/auth/google/callback), which would come from environment variables.

#### Dynamic IP Updates:

- The local backend would expose an endpoint (/updateIP) to update the local IP stored in memory.
- Alternatively, the local IP could be set via an environment variable.

### Final Solution Decided Upon:

#### Subdomain as Callback Handler (Development Only):

- The subdomain (https://oauth.example.com) will be registered as the callback URL with all OAuth providers only for development. Note that `oauth.example.com` is just an example subdomain.
- It will forward callbacks to the local backend during development based on the clientType, localIP, and localPort in the state parameter.
- In production, the subdomain will not be used. Instead, the production server will handle everything directly, and no local IP will be sent or forwarded.

#### Local Backend Handles Callbacks:

- The local backend will process the OAuth callback using passport.authenticate().
- It will generate a JWT and redirect to the appropriate client (web or mobile).

#### Environment-Specific Logic:

- In development, the callbackURL will be set to the subdomain, and the subdomain will forward requests to the local backend.
- In production, the callbackURL will be set to the production callback URL (e.g., https://api.production.com/auth/google/callback), which will come from environment variables.

#### Dynamic IP Handling:

- The local IP will be passed in the state parameter during development.
- The subdomain will use this IP to forward callbacks to the local backend.

### Current Status:

- The subdomain is not yet set up or registered with OAuth providers.
- The subdomain API is not yet implemented.

### Next Steps:

- Set up the subdomain (https://oauth.example.com) and link it to the server. Note that `oauth.example.com` is just an example subdomain.
- Implement the subdomain API to forward callbacks to the local backend during development.
- Register the subdomain as the callback URL with all OAuth providers.
- Test the entire flow in both development and production environments.
- Handle edge cases (e.g., missing profile data, invalid state parameters).

If you have any suggestions, please feel free to leave the suggestions. Constructive Criticism is always appreciated.

<hr>

## Tips

<div>
<ol>
    <li>To setup this project, clone it and run `bun i` to install dependencies.</li>
    <li>Create a file named .env in the root. You can use the .env.sample file as a reference for the ENV Variables that are needed for the app.</li>
    <li>Set Up the required Env Variables to be used in the app.</li>
    <li>Start the server with `docker compose up`.</li>
</ol>

OR, just build the Docker Image using the Dockerfile and enjoy. <br />
PS: If you go with docker, use port 5000 in the build process.

</div>
<hr>

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

<hr>

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

<hr>
