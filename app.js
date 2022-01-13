const captainsLog = require("./controllers/captainsController");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/logs", captainsLog);

app.get("/", (request, response) => {
  response.send("Welcome to the Captain's Log");
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page does not exist..." });
});

module.exports = app;
