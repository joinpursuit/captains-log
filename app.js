const express = require("express");
const app = express();
const captainlog = require("./controllers/captainlog.controller.js");

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("/logs", captainlog);

app.use("*", (req, res) => {
  res.status(404).send("Opps! Nothing to see here.");
});

module.exports = app;
