// Dependencies
const express = require("express");
const logsController = require("./controllers/logsController.js");
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(cors());
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
