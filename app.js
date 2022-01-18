const express = require("express");
const app = express();
const log = require("./controllers/logsController");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("welcome to the captain's log");
});

app.use("/logs", log);

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
