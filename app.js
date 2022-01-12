const express = require("express");
const app = express();

//middleware
app.use(express.json());

const logsController = require("./controllers/logsController.js");
const logsArray = require("./models/log.js");

app.get("/", (req, res)=> {
    res.send(`welcome to the captain's log`);
});

app.use("/logs", logsController);

app.get("*", (req, res)=> {
    res.status(404).json(logsArray);
});

module.exports = app;