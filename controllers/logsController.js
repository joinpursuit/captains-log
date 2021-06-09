const logs = require("express").Router();
const logsArray = require("../models/logs");

logs.get("/:id", (req, res) => {
    const { id } = req.params;
    if(logsArray[id]) {
        console.log(logsArray[id])
        res.json(logsArray[id])
    } else {
    res.status(404).send("Page Not Found!!!")
    }
})

logs.get("/", (req, res) => {
    res.json(logsArray);
});




module.exports = logs