const logs = require("express").Router();
const logsArray = require("../models/logs");

logs.get("/:id", (req, res) => {
    const { id } = req.params;
    if(logsArray[id]) {
        console.log(logsArray[id])
        res.json(logsArray[id])
    } else {
    res.redirect("/*")
    }
})

logs.get("/", (req, res) => {
    res.json(logsArray);
});

logs.post("/", (req, res) => {
    logsArray.push(req.body);
    console.log
    res.json(logsArray[logsArray.length - 1])
})


module.exports = logs