const express = require("express")
const logsArray = require("./models/log")

const app = express()

app.get('/', (request, response)=> {
    response.send("Home")
})

app.get('/logs', (request, response) => {
    response.send(logsArray)
})

app.get("/logs/:arrayIndex", ( request, response)=> {
    const {arrayIndex: index} = request.params
    response.send(logsArray[index])
})

// app.post("/logs", (request , response)=> {
//     response.send("Post request to logs")
// })

app.get('*', (request, response)=>{
    response.sendStatus(404)
})


module.exports = app