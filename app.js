// DEPENDENCIES
const express = require("express");
const app = express();
const logsControllers = require("./controllers/logsControllers");

// ROUTES
app.get("/", (req, res) => {
  res.send("Captains Log");
});

app.use("/logs", logsControllers);

// EXPORT
module.exports = app;
