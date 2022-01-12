// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

// LISTEN
const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})