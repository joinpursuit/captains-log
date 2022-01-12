// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
console.log(app)
app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});