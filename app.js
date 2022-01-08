const { response } = require("express");
const express = require("express");
const app = express();
const logs = require("./models/log");

app.get("/", (request, response) => {
  response.send("Welcome to the Captains Log");
});

app.get("/logs", (request, response) => {
  response.send(logs);
});

app.get("*", (request, response) => {
  response.send({
    status: "fail",
    error: "Page Not Found",
  });
});

module.exports = app;
