// ! Dependencies
const express = require("express");
const logsController = require("./controllers/logsController.js");

// ! Configuration
const app = express();

// ! routes
app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
})

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.send(`<h2>404 Page Not Found</h2> <img src="https://cdn.dribbble.com/users/169046/screenshots/6804670/yab-404.png?compress=1&resize=400x300" />`)
})

module.exports = app;
