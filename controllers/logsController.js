const express = require('express')

const logs = express.Router()

const logsData = require("../models/log")


const { validateURL } = require('../models/validations')

logs.get('/', (req, res) => {
    res.json(logsData)
})

logs.get("/:arrayIndex", (req, res) => {
    console.log(req.params);
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        res.json(logsData[arrayIndex])
    } else {
        return res.redirect('/');
    }
})

logs.post("/", validateURL, (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
});

logs.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (logsData[arrayIndex]) {
        const deletedLogs = logsData.splice(arrayIndex, 1)
        res.status(200).json(deletedLogs)
    } 

});

logs.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (logsData[arrayIndex]) {
        logsData[arrayIndex] = req.body
        res.status(200).json(logsData[arrayIndex])
    } 

});


module.exports = logs