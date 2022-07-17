const app = require("./app.js")

require("dotenv").config();
//allows us access to out .env file

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`APP IS LIVE ON PORT ${PORT}`)
})