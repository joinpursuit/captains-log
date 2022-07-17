const express = require('express');
const app = express();
const PORT = 3003;

const logController = require('./controllers/logsController');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome to the captains log');
});

app.use('/logs', logController);

app.use('*', (req, res) => {
  res.status(404).send('Oops! Nothing to see here.');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

// npx browserslist@latest --update-db
