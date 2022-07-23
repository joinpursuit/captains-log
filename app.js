const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const logsController = require("./controllers/logsController.js")

app.use((req,res, next)=>{
  console.log('A request is being made')
  next()
})

app.get('/',(req,res)=>{
  res.send("Welcome to the captain's log")
})

app.use('/logs', logsController);

app.get('*',(req,res)=>{
  res.status(404).json({
    error:"Page Not Found"
  })
})



module.exports = app