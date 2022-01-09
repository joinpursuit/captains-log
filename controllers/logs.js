const express = require("express")
const logsArray = require("../models/log")
const bodyParser = require("body-parser")

const logs = express.Router()

logs.use(bodyParser.urlencoded({ extended: false }));
logs.use(bodyParser.json());

logs.get('/', (request, response) => {
    console.log("Get /logs")
    response.json(logsArray)
})

logs.get("/:arrayIndex", ( request, response)=> {
    console.log("Get /logs/:arrayIndex")
    const {arrayIndex: index} = request.params
    if(!logsArray[index]){
        response.redirect(404)
    } else {
        response.json(logsArray[index])
    }
    
})

logs.post("/", (request, response) => {
    console.log("Post /logs")
    logsArray.push(request.body)
    response.json(logsArray)
})

logs.delete("/:arrayIndex", (request, response)=> {
    console.log("Delete /logs")
    const { arrayIndex: index} = request.params
    logsArray.splice(index, 1)
    response.json(logsArray)
})

module.exports = logs