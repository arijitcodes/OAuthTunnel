import express from "express";
import morgan from "morgan";

const app = express();

// Logging middleware
app.use(morgan("dev"));

/**
 * Health check endpoint
 * @route GET /health
 * @description Check if the server is running
 */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "🟢 OK" });
});

/**
 * OAuth callback handler
 * @route GET /auth/:provider/callback
 * @description Forward OAuth callbacks to the local backend
 */
app.get("/auth/:provider/callback", (req, res) => {
  try {
    // Parse the state parameter
    const state = JSON.parse(decodeURIComponent(req.query.state || "{}"));
    const {
      clientType = "web",
      localIP = "localhost",
      localPort = 5000,
    } = state;

    // Determine the target URL based on client type and port
    const targetHost = clientType === "web" ? "localhost" : localIP;
    const targetURL = `http://${targetHost}:${localPort}/auth/${req.params.provider}/callback`;

    // Forward all query parameters to the local backend
    const queryParams = new URLSearchParams(req.query).toString();
    const fullURL = `${targetURL}?${queryParams}`;

    // Log the forwarding request
    console.log(`📤 Forwarding OAuth callback to: ${fullURL}`);

    // Redirect to the local backend
    res.redirect(fullURL);
  } catch (error) {
    console.error("❌ Proxy error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Catch-all route for unmatched routes
app.use((req, res) => {
  console.error(`❌ Unmatched route: ${req.method} ${req.url}`);
  res.status(404).send("Not Found");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(500).send("Internal Server Error");
});

// Port configuration
const PORT = process.env.PORT || 5943;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 OAuthTunnel is running on port ${PORT}`);
});
