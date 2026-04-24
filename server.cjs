const express = require("express");
const path = require("path");

const app = express();

// Serve the Vite build output
app.use(express.static(path.join(__dirname, "dist")));

// For any route not matched by static files, serve index.html
// This is required for React Router to work correctly
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 4173;
app.listen(PORT, () => {
  console.log(`Sole City client running on port ${PORT}`);
});
