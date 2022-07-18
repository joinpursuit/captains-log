const app = require('./app.js');

require('dotenv').config();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Listening to traffic on port ${PORT}`);
});
