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
    captArr.push(req.body)
    res.json(captArr[- 1])
})

logs.put("/:id", (req, res) => {
    const { id } = req.params
    if (captArr[id]) {
        captArr[id] = req.body
        res.json(captArr[id])
    } else {
        res.redirect("/404")
    }
})

logs.delete("/:id", (req, res) => {
    const { id } = req.params
    if (captArr[id]) {
        const removedcapt = captArr.splice(id, 1)
        res.json(removedcapt[0])
    } else {
        res.redirect("/404")
    }
})
module.exports = logs;