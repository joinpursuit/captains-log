const express = require("express")
const logsArray = require("../models/log")
const bodyParser = require("body-parser")
const {sortByCaptainName, filterMistakes, filterLastCrisis} = require("../helper/sort")

const logs = express.Router()

logs.use(bodyParser.urlencoded({ extended: false }));
logs.use(bodyParser.json());

logs.get('/', (request, response) => {
    console.log("Get /logs")
    const {order, mistakes, lastCrisis} = request.query
    let arr = [...logsArray]
    if(!!order){
        arr = sortByCaptainName(arr, order)
    }
    if(mistakes !== undefined){
        arr = filterMistakes(arr, mistakes)
    }
    if(lastCrisis){
        arr = filterLastCrisis(arr, lastCrisis)
    }

    response.send(arr)
   
    
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
    const dataType = {
        captainName: "string",
        title: "string",
        post: "string",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 1
    }
    let validType = true
    for(const key in request.body){
        console.log(typeof dataType[key])
        if(typeof dataType[key] !== typeof request.body[key]){
            validType = false
        }
    }
    if(validType){
        logsArray.push(request.body)
        response.json(logsArray)
    } else {
        response.sendStatus(404)
    }
    
})

logs.delete("/:arrayIndex", (request, response)=> {
    console.log("Delete /logs")
    const { arrayIndex: index} = request.params
    logsArray.splice(index, 1)
    response.json(logsArray)
})


module.exports = logs