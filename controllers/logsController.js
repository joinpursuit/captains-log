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

logs.put("/:id",  (req, res) =>{
    const { id } = req.body;
    const { body } = req; 
    if (logsArray[id]) {
        logsArray[id] = body;
        res.json(logsArray[id]);
    } else {
        res.redirect("/*")
    }
})

logs.delete("/:id", (req, res) => {
    const { id } = req.params;
    const logDeleted = logsArray.splice(id, 1) 
        res.json(logDeleted[id])
})
module.exports = logs