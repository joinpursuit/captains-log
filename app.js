const express = require("express");
const logController = require("./controllers/logs");
const v2Controller = require("./v2/controllers/logsController");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/logs", logController);
app.use("/v2/logs", v2Controller);

// HOME ROUTE
app.get("/", (req, res) => {
  console.log("GET request to /");
  res.send("Welcome to the captain's log");
});
// ERROR HANDLER
app.get("*", (request, response) => {
  response.status(401).send(`<img src="https://http.cat/400">`);
});

module.exports = app;
