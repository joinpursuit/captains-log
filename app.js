const express = require("express")

const app = express()

app.get('/', (request, response)=> {
    response.send("Home")
})


module.exports = app