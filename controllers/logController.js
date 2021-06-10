// THIS IS OUR CONTROLLER
// The controller acts as the logic which connects the VIEW to the MODEL
// This holds our routing logic

const logController = require("express").Router()  
const log = require("../models/log") 
// This tells the application that, from Express, we want a Router, and we are calling our router logController

logController.get("/", (req, res) => {
    res.send(log)
})




module.exports = logController