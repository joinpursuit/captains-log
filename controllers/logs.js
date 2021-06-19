const logs = require("express").Router();
const logsArray= require("../models/logs.js");

logs.get("/", (req, res) => {
    res.json(logsArray);
})

 //show by ID
logs.get("/:id", (req, res) => {
    if (logsArray[req.params.id]) {
        res.json(logsArray[req.params.id])
    } else {
        res.redirect("/404")
    }
})

//create
logs.post("/", (req, res) => {
    logsArray.push(req.body)
    res.json(logsArray[logsArray.length - 1])
})

//destroy
logs.delete("/:id", (req, res) => {
    const deletedLog = logsArray.splice(req.params.id, 1)
    res.status(200).json(deletedLog)
})

//update
logs.put("/:id", (req, res) => {
    logsArray[req.params.id] = req.body
    res.status(200).json(logsArray[req.params.id])
})

module.exports = logs; 