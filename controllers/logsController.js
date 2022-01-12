const express = require("express");
const logsRoutes = express.Router();
const logs = require("../models/log");

logsRoutes.get("/",(_,response)=>{
    response.json(logs)
})

module.exports = logsRoutes;