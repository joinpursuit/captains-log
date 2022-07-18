const express = require("express");
const logs = express.Router();
let logsData = require("../models/log.js");

logs.get("/", (request, response) => {
    if(request.query){
        
    }
	response.json(logsData);
});

module.exports = logs;
