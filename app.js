const express = require("express");
const app = express();

app.use(express.json());

const logsController = require("./controllers/logsController.js");

app.get("/", (req,res) => {
    res.send("welcome to the captain's log");
});

app.use("/logs", logsController);

app.get("*", (req,res) => {
res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" alt="dogs" />`);
});

module.exports = app;