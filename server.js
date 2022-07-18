const app = require("./app.js");


require("dotenv").config();

const PORT = process.env.PORT;


app.listen(PORT, () => {
	console.log(`It is listening on ${PORT} go Ahead !!!`);
}); 