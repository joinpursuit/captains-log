const express = require('express');
const app = express();
app.use(express.json());
const logsController = require("./controllers/logsController.js")



app.get('/', (req, res) => {
    res.send("Welcome to the captains log")
})

app.use('/logs', logsController)

app.get('*', (req, res) => {
  res.status(404).json('Sorry, no page found!');
});


module.exports = app;