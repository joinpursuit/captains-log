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
    console.log("Checking Validity.....");
    next();
  };

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
});

app.get("/logs", (req, res) => {
    res.json(logsArray)
})

app.post("/logs", validateURL, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length-1]);
});

app.get("/logs/:arrayIndex", validateURL, (req, res) => {
    const { arrayIndex } = req.params;
        res.json(logsArray[arrayIndex]);
    });

module.exports = app;