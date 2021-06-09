const logsController = require("express").Router();
const logsArray= require("../models/log");

logsController.get("/", (req, res) => {
    res.send(logsArray);
})

logsController.get("/", (req, res) => {
    const {order } = req.query
    const { asc } = req.params
    if (order = asc) {
        res.send(logsArray)
    }
})
logsController.get("/:id", (req, res) => {
    const { id } = req.params
    res.send(logsArray[id]);
})

module.exports = logsController; 