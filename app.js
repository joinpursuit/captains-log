const express = require("express");
const app = express();
const logsController = require("./controllers/logsController.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/logs", logsController);

app.get("/", (request, response) => {
  response.send(`Welcome to the Captain's Log App!`);
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});
console.log("hello world");
module.exports = app;
