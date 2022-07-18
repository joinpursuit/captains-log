const express = require('express');
const logsController = require('./controllers/logs');

const v2LogsController = require('./v2/controllers/logsController');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use('/logs', logsController);
app.use('/v2/logs', v2LogsController);

app.get('/', (request, response) => {
  console.log('Get /');
  response.send('Home');
});


app.get('*', (request, response) => {
  response.sendStatus(404);
});

module.exports = app;
