const express = require("express");
const app = express();
app.use(express.json());
const logsController = require("./controllers/logs.controller");

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("/logs", logsController);

app.get("/Error", (req, res) => {
  res.status(404).send("Page not found");
});

app.get("*", (req, res) => {
  res.redirect("/Error");
});

module.exports = app;
