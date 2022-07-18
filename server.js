const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening for traffic on post ${PORT}`);
});
