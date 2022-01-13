const express = require("express");
const logRoutes = express.Router();
const logs = require("../models/log.js");

logRoutes.get("/", (req,res) => {
    res.send(logs)
});

logRoutes.get("/:index", (req, res) => {
    const { index } = req.params;
    if(logs[index]){
        res.send(logs[index]);
    }
    res.status(404).redirect("/");
});

logRoutes.post("/", (req, res) => {
    logs.push(req.body);
    res.json(logs[logs.length - 1]);
});

logRoutes.delete("/:index", (req, res) => {
    const { index } = req.params;
    let removed = logs.splice(index , 1);
    logs[index] ? res.json(removed[0]) : res.status(404).redirect("/");
})

module.exports = logRoutes;