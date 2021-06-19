// Dependencies
const express = require("express");
const logsController = require("./controllers/logsController.js");

// Configuration
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
