const app = require('./app');

require('dotenv').config();
const PORT = process.env.OUR_PORT || 3004;

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});