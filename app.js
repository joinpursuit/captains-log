const express = require("express");
const logsController = require("./controllers/logsController");

const app = express();

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});

app.use(express.json())

app.use("/logs", logsController);


app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.get("/*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;
