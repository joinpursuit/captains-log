const express = require("express");

const app = express();

const logsController = require("./controllers/logs.controller.js");
const v2LogsController = require("./v2/controllers/logsController.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController);
app.use("/v2/logs", v2LogsController);

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
