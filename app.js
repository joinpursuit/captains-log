const { request } = require("express");
const express = require("express");
const app = express();
const log = require("./models/log");
const logsController = require("./controllers/logsController");
const { json } = require("express/lib/response");

app.use("/logs", logsController);
app.use(express.json());

app.get("/", (request, response) => {
  response.send("welcome to the captain's log");
});

app.get("*", (request, response) => {
  response.status(404).json({ Error: "Page not found!" });
});

log.post("/", (request, respond) => {
  respond.status(201).json(logsArray);
});

// app.get("/logs", (request, response) => {
//   console.log("GET request receive to route: /log");
//   response.send(log);
// });

module.exports = app;
