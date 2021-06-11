// THIS IS OUR CONTROLLER
// The controller acts as the logic which connects the VIEW to the MODEL
// This holds our routing logic

const logController = require("express").Router()  
const log = require("../models/log") 
// This tells the application that, from Express, we want a Router, and we are calling our router logController

// Index
logController.get("/", (req, res) => {
    res.send(log)
})
// Show
logController.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    log[arrayIndex] ? res.send(log[arrayIndex]) : res.redirect("404: id not found")
    // Failing to redirect with res.redirect() will result in a nasty bug! - (it even interferes with your .post() function)
})
// Create
logController.post("/", (req, res) => {
    log.push(req.body)
    res.json(log[log.length - 1])
})




module.exports = logController