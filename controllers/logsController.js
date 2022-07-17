const express = require("express")
const logs = express.Router();

const logsArray = require("../models/logs.js")
const {validateURL} =require("../models/validations")

// logs.get("/", (req, res) => {
//     res.json(logsArray)
// })
logs.get("/", (req, res) => {
    const { order } = req.query
    if (order === "asc"){
        res.json(
            logsArray.sort((a, b) => {
                return a.daysSinceLastCrisis - b.daysSinceLastCrisis
            })
        )
    }
    if (order === "desc"){
        res.json(
            logsArray.sort((a, b) => {
                return b.daysSinceLastCrisis - a.daysSinceLastCrisis
            })
        )
    }
    res.json(logsArray)
})

logs.get("/:arrayIndex", (req, res) => {
    const {arrayIndex } =  req.params;
    if(logsArray[arrayIndex]) {
        res.json(logsArray[arrayIndex])
    } else {
        res.status(404).send("no log found - sorry")
    }
})
    
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length-1])
})


module.exports = logs