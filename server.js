// IMPORT
const app = require('./app.js');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})