const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT
// const LOGGING_ENV = "DEVELOPMENT"

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})