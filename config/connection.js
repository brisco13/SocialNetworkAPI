// require mongoose
const { connect, connection } = require("mongoose");

// connection string to port defined in .env file or the local DB
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetwork";

// call to connect to the connection string
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export this connection
module.exports = connection;
