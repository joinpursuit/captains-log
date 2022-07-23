const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const logController = require("./controllers/logsController.js")

app.use((req,res)=>{
  console.log('A request is being made')
})

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