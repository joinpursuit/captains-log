const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.OUR_PORT || 3008;

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
