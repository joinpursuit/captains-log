const express = require("express");
const logsRoutes = express.Router();
const logs = require("../models/log");
const {validateURL} = require('../models/validations')

//GET
logsRoutes.get("/", (req, res) => {
  res.json(logs);
});

//GET - Getting a specific log with params id (http://localhost:8888/logs/1)
logsRoutes.get("/:id", (request, response) => {
    const {id} = request.params;
    if(logs[id]){
        response.json(logs[id]);
    }else{
        response.redirect("*")
        //instead of writing error it redirects to star path.
    }
})

//POST - Creating a new log, adding to the end of the log's array
logsRoutes.post("/", validateURL, (request, response) => {
    logs.push(request.body);
    response.json(logs[logs.length-1]);
})

//DELETE  
logsRoutes.delete("/:id", (request, response) => {
    const {id} = request.params;
    const deletedLogs = logs.splice(id, 1)
    response.status(200).json(deletedLogs)
})
  

module.exports = logsRoutes;