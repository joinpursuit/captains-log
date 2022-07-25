/** @format */

// DEPENDENCIES
const express = require('express');
// CONFIGURATION
const app = express();
// MIDDLEWARE that turns our JSON into usable JAVASCRIPT. Parse incoming JSON.
const cors = require('cors');

app.use(cors());
app.use(express.json());

const logs = require('./models/logs.js');

const logsController = require('./controllers/logsController.js');

// ROUTES
app.get('/', (req, res) => {
	res.send("Welcome to the Captain's Log App! Live Long and Prosper 🖖!");
});

// INDEX
app.get('/logs', (req, res) => {
	res.send(logs);
	console.log(`This array has ${logs.length} elements.`);
});

// MIDDLEWARE
app.use('/logs', logsController);

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).json({ error: 'Page not found' });
});

// EXPORT
module.exports = app;
