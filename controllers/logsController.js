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

logs.post("/", (request, response) => {
    logsArray.push(request.body)
    response.send(logsArray[logsArray.length-1])
})

logs.put("/:arrayIndex", (request, response) => {
    const { arrayIndex } = request.params
    logsArray[arrayIndex] = request.body
    response.json(logsArray[arrayIndex])
})

module.exports = logs