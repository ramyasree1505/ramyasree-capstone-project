const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("views"));

app.get("/api/health", (req, res) => {
  res.json({ status: "success", message: "App is running fine " });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
