const express = require("express");
const app = express();

const logController = require("./controllers/logController.js");
const log = require("./models/log.js");

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
});

app.get("/logs/:id", (req, res) => {
    const { id } = req.params;
    if(log[id]){
        res.send(log[id]);
    } else {
        res.redirect("*");
    }
});

app.use("/logs", logController);

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"});
});


module.exports = app;