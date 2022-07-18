// DEPENDENCIES
const express = require("express");
//const logsController = require("./controllers/logsController.test.js")

// CONFIGURATION
const app = express();

// ROUTES

  // Home
app.get("/", (req, res) => {
	res.send("welcome to the captain's log");
});

// CONTROLLER-ROUTES
//app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.send("Sorry, no page found!");
});

// EXPORT
module.exports = app;