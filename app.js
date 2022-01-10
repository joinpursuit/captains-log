// DEPENDENCIES
const express = require("express");
const res = require("express/lib/response");
const app = express();
const logsControllers = require("./controllers/logsControllers");

// ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsControllers);

// ERROR HANDLING
app.get("*", (req, res) => {
  res.status(404).redirect("https://github.com/joshmarte/captains-log-api");
});

// EXPORT
module.exports = app;
