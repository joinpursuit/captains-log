const logsControllers = require("./controllers/logsControllers");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/logs", logsControllers);

app.get("/", (request, response) => {
  response.send("Welcome to the Captains Log");
});

app.get("*", (request, response) => {
  response.send({
    status: "fail",
    error: "Page Not Found",
  });
});

module.exports = app;
