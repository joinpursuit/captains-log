const express = require("express");
const logs = require('./controllers/logsController')
const cors = require('cors')

// CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());

app.use(cors())
app.use((req, res, next)=>{
    console.log(`testing 101`)
    next()
})

app.use("/logs", logs)

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.get('/logs', (req, res)=> {
    res.json(captain)
})

app.get('*', (req, res)=>{
    res.status(404).send("404 Not Found!")
})
module.exports = app;
