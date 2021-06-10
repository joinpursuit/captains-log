const express = require('express');
const logs = express.Router()
const captArr = require('../models/log.js');

logs.get("/", (req, res) => {
    res.json(captArr)
})

logs.get("/:id", (req, res) => {
    const { id } = req.params
    if (captArr[id]) {
        res.json(captArr[id])
    } else {
        res.redirect('/404')
    }
})

logs.post("/", (req, res) => {
    captArr.push(req.body);
    res.json(captArr[captArr.length - 1]);
})
module.exports = logs;