const express = require('express');
const { on } = require('nodemon');
const logs = require('./controllers/routes');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use('/', logs);
app.use('*', (req, res) => {
  res.status(403).send('<h1>This path or log is beyond our known galaxy</h1>');
});

module.exports = app;
