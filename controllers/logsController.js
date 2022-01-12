const express = require("express");
const logsRoutes = express.Router();
const logs = require("../models/log.js");

logsRoutes.get("/",(_,response)=>{
    response.json(logs)
})

logsRoutes.get("/:id", (request, response) => {
    const {id} = request.params;
    if(logs[id]){
        response.json(logs[id]);
    }else{
        response.redirect("*")
        //instead of writing error it redirects to star path.
    }
})

logsRoutes.post("/",(request, response) => {
    logs.push(request.body);
    response.json(logs[logs.length-1]);
})

logsRoutes.delete("/:id", (request, response) => {
    const {id} = request.params;
    if(logs[id]){
    logs.splice(id, 1)
    response.status(200).json(logs)
    }else{
      response.status(404).json({error: "Not Found"});
    }
})

module.exports = logsRoutes;