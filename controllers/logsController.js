const logs = require ("express").Router()
const logsArray = require("../models/log")

logs.get("/", (req, res)=>{
    res.json(logsArray)
})

module.exports = logs