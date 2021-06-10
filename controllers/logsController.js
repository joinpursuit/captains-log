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
        res.redirect ('/404');
    }
});

logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
});

logs.put("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        logsArray[index] = req.body;
        res.json(logsArray[index])
    } else {
        res.redirect("/404")
    }
});

logs.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        const deleted = logsArray.splice(index, 1)
        res.json(deleted[0])
    } else {
        res.redirect("/404")
    }
})

module.exports = logs;
