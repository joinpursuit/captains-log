const express = require("express")
const logs = express.Router()
const logsArray = require("../models/log")

logs.get("/", (request, response) => {
    response.send(logsArray)
})

logs.get("/:arrayIndex", (request, response) => {
    const { arrayIndex } = request.params
    logsArray[arrayIndex]
    ? response.send(logsArray[arrayIndex])
    : response.redirect()
})

module.exports = logs