const logsController = require("express").Router();
const captain = require("../models/log");

logsController.get("/", (req, res) => {
    res.json(captain);
})

module.exports = logsController; 