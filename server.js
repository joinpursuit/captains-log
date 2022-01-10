// Pull in app.js.
const app = require('./app')

// Dependencies.
const dotenv = require("dotenv")

// Configuration.
dotenv.config();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Successfully listening on: " + PORT)
})