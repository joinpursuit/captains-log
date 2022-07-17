const express = require("express");
const app = express();
const logs = require("./models/log.js");

const logsController = require("./controllers/logs.controller.js");
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});
app.get("/logs/:id", (req, res) => {
  const { id } = req.params;
  if (logs[id]) {
    res.json(logs[id]);
  } else {
    res.redirect(404).json({ error: "Not found" });
  }
});

module.exports = app;
