const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
