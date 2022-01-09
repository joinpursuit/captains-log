const express = require("express")
const logsArray = require("./models/log")

const app = express()

app.get('/', (request, response)=> {
    response.send("Home")
})

app.get('/logs', (request, response) => {
    response.send(logsArray)
})

app.get('*', (request, response)=>{
    response.sendStatus(404)
})


module.exports = app