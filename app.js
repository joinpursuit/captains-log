const logController = require('./controllers/logsController');

const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use('/logs', logController);


app.get('/', (request, response) => {
    // console.log('GET request to route - "/"')
    response.send("Captain's Log ⚓📋");
});

app.get('*', (request, response) => {
    response.status(404).json({ ERROR: 'Page not found' });
});

module.exports = app;