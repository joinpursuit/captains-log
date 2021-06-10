//DEPENDENCIES
const app = require('./app')

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT

//Listening
app.listen(PORT, () => {
	console.log(`live on http://localhost:${PORT}`)
})
