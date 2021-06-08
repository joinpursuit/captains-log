const app = require("./app.js");

require("dotenv").config();
const PORT = process.env.PORT;
const LOGGING_ENV = "DEVELOPMENT"

app.listen(PORT, () => {
    console.log(`[${LOGGING_ENV}] Listening on port ${PORT}`);
})
