const express = require("express");
const app = express();
const logsArray = require("./models/log");

// const cors = require("cors");

// app.use(cors);
app.use(express.json());

app.use((req, res, next) => {
    next();
});

const validateURL = (req, res, next) => {
    console.log("This function checks the validity");
    next();
  };

app.get("/", (req, res) => {
    res.send("root");
});

app.get("/logs", (req, res) => {
    res.json(logsArray)
})

app.post("/logs", validateURL, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length-1]);
});

module.exports = app;