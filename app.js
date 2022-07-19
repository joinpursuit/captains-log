const express = require('express');
const app = express();
const logsController = require('./controllers/logs.controller.js');


app.use(express.json());

// welcome message route
app.get('/', (req, res) => {
	res.send("welcome to the captain's log");
});

// route for logs array
app.use('/logs', logsController);

// 404 error route
app.get('*', (req, res) => {
	res.status(404).send('route you have chosen does not exist, better luck next time!');
});



module.exports = app;
