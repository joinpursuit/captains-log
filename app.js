const express = require("express");
const app = express();

const logsController = require("./controllers/logs.controller.js");

//TODO: Change json to send for bad path

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
