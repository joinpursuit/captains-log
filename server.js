const app = require("./app");
const dotenv = require("dotenv");

//configuration.
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
