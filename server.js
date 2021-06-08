// Dependencies 

const app = require("./app.js")

// Configuration
require("dotenv").config();
const PORT = process.env.PORT

// Listener

app.listen(PORT, () => { 
    console.log(`[Captain's Log] Listening on port: ${PORT}`)
    
 })