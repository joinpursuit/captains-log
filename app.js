// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Captain's log");
});

app.get("/logs", (req, res) => {
  res.send("");
});

app.get("*", (req, res) => {
  res.status(404).send(" Page not found");
});

// Export
module.exports = app;
