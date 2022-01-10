const express = require("express");
const app = express();
const logs=require('./models/log')

// app.use('/log',logTestController)

app.get('/', (request,response)=> {
    response.send("Welcome to the captain's log"
    )
})

app.get('/logs', (request,response)=> {
    response.send(logs)
})

app.get('*',(request,response)=> {
    response.status(404)
    .json({error:'Page not found'})
})
module.exports= app;