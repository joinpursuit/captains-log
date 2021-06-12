const express = require("express");
const cors = require('cors');
const app = express();
const logsController = require("./controllers/logsController.js");
const v2LogsController = require("./v2/controllers/logsController");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  next();
});

app.use("/logs", logsController);
app.use("/v2/logs", v2LogsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
