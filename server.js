const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 5000;
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDb Database connection established succssfully');
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
