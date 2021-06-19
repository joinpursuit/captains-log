const express = require("express");
const logsController = require("./controllers/logsController.js");
const app = express();

//
const cors = require("cors")

//
app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Captains Log!");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
