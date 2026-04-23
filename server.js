import express from “express”;
import path from “path”;
import { fileURLToPath } from “url”;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the Vite build output
app.use(express.static(path.join(__dirname, “dist”)));

// For any route not matched by static files, serve index.html
// This is required for React Router to work correctly
app.get(”*”, (req, res) => {
res.sendFile(path.join(__dirname, “dist”, “index.html”));
});

const PORT = process.env.PORT || 4173;
app.listen(PORT, () => {
console.log(`Sole City client running on port ${PORT}`);
});