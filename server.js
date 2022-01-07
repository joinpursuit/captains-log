//Dependencies
const app = require(`${__dirname}/app`);
const dotenv = require('dotenv');

//Configurations
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
