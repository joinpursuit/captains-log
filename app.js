const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("8.4 IS THE Bomb");
    next();
});
const logsController = require("./controllers/logsController.js");

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log ")
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;