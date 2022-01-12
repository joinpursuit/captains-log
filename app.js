// DEPENDENCIES
const express = require("express");
const res = require("express/lib/response");
const app = express();
const logsControllers = require("./controllers/logsControllers");
const v2Logs = require("./v2/controllers/logControllers");

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/logs", logsControllers);
app.use("/v2/logs", v2Logs);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

// ERROR HANDLING
app.get("*", (req, res) => {
  res.status(404).redirect("https://github.com/joshmarte/captains-log-api");
});

// EXPORT
module.exports = app;
