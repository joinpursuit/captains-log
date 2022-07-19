const express = require("express");

//config
const app = express();
const logController = require("./controllers/log.controllers");

app.use(express.json()); // Parse incoming JSON

app.get("/", (req, res) => {
  res.send("welcome to the captains log");
});

app.use("/logs", logController);

app.use("*", (req, res) => {
  res.status(404).send("oops nothing to see here");
});

//export
module.exports = app;
