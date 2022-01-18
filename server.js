const dotenv = require("dotenv");
const app = require("./app.js");

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`I am running on port ${PORT}`);
});
