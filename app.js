const express = require("express");
const app = express();
const cors = require('cors')
const logsControllers = require('./controllers/logsController')


app.use(express.json()) 
app.use('/logs', logsControllers)
app.use((cors()))



app.get('/', (request,response)=> {
    response.send("Welcome to the captain's log"
    )
})

// app.get('/logs', (request,response)=> {
//     response.send(logs)
// })


// app.post('/logs/:index',(request,response)=> {
//     const {index} = request.params;

// })

app.get('*',(request,response)=> {
    response.status(404)
    .json({error:'Page not found'})
})
module.exports= app;