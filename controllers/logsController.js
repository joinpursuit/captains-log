const express = require("express");
const logs = express.Router();

const logData = require("../models/log.js");
// const { validateURL } = require("../models/validations")

logs.get("/", (req, res) => {
    res.json(logData);
});

logs.get("/:arrayIndex", (req, res) => {
    // console.log(req.params);
    const { arrayIndex } = req.params;
    if (logData[arrayIndex]) {
        res.json(logData[arrayIndex])
    } else {
        res.redirect('/logs')
        // res.status(404).json({error: "page not found"})
    } 
})

logs.post("/", (req, res) => {
    logData.push(req.body);
    res.json(logData[logData.length - 1]);
});


// logs.delete("/", (req, res) => {
//     logData.pop(req.body);
//     res.json(logData[logData.length - 1]);
//     // res.send("deleted....GONE")
// });

module.exports = logs