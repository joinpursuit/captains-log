const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const logsController = require("./controllers/logs.js");

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;
