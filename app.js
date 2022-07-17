const express = require("express");
const app = express();

const logsController = require("./controllers/logs.controller.js");
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

module.exports = app;
