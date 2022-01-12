const express = require("express");
const captainsLog = require("./controllers/captainsController");
const app = express();

app.use(express.json());
app.use("/logs", captainsLog);

app.get("/", (request, response) => {
  response.send("welcome to the captain's log");
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});
module.exports = app;
