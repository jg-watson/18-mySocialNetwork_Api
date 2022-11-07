const { connect, connection } = require('mongoose');

//connection to MONGODB_URI
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;