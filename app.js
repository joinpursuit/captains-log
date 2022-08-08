const express = require("express");
const app = express();
const logController = require("./controllers/log.controller");

app.use(express.json());
app.use("/logs", logController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Not Found");
});

module.exports = app;
