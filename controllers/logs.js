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


//update

module.exports = logs; 