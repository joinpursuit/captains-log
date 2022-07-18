// Dependencies
const app = require("./app.js");

// Config
require("dotenv").config();
const PORT = process.env.PORT;

// Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});