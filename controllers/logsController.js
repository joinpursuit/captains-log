const express = require('express');
const logs = express.Router();
const logsArray = require("../models/log.js")

logs.get("/", (req, res) => {
    res.json(logsArray);
});

logs.get("/:id", (req, res) => {
    if (logsArray[req.params.id]) {
        res.json(logsArray[req.params.id]);
    } else {
        res.redirect ('<h2>404 Page Not Found</h2> <img src="https://cdn.dribbble.com/users/169046/screenshots/6804670/yab-404.png?compress=1&resize=400x300" />')
    }
})

logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
})

module.exports = logs;
