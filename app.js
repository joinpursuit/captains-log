const express = require("express");
const cors = require("cors");

const app = express();
const logsController = require("./controllers/logsController.js");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[development] Middleware is running!`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log!");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.send(
    `<h1>404 Page Not Found!</h1> <img src="https://i.ebayimg.com/00/s/NDk5WDc1MA==/z/TrAAAOSwFL9TsF6Z/$_3.JPG"/>`,
  );
});

module.exports = app;
