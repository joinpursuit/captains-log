//importing express and defining our server
const app = require('express')();
//importing logs route
const logs = require('./controllers/logsController');

//tell app to use logs to handle "/logs" path
app.use('/logs', logs);

// home route for server
app.get('/', (req, res) => {
  console.log('Successfully routed to "/"');
  res.send("Welcome to the captain's log.");
});

//create 404 route if nothing is found
app.get('*', (req, res) => {
  console.log('Route not found');
  res.status(404).json('Error, not found');
});

module.exports = app;
