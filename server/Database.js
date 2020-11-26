const mongoose = require("mongoose");

// Connect to the DB
const connectDatabase = () => {
    mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-api.fyhgt.mongodb.net/keep-pwd?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database Connected..."))
  .catch((err) => console.log(err));
}

module.exports = connectDatabase;