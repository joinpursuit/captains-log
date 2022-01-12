const express = require("express")
const logs = express.Router()
const logsArray = require("../models/log")

logs.get("/", (request, response) => {
    response.send(logsArray)
})

module.exports = logs