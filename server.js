//importing dotenv and configuring it
const dotenv = require('dotenv').config();

//importing app
const app = require('./app');

//grabbing port from .env
const { PORT = 3003 } = process.env;

//start listening
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
