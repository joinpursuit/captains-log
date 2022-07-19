const express = require('express')
const app = express()

app.use(express.json())

const logController = require("./controllers/logsController.js")

app.get('/',(req,res)=>{
  res.send("Welcome to the captain's log")
})

app.use('/logs', logController);

app.get('*',(req,res)=>{
  res.status(404).json({
    error:"Page Not Found"
  })
})



module.exports = app