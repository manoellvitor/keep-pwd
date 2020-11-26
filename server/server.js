const express = require("express");
const helmet = require("helmet");
const boom = require("@hapi/boom");

const connectDatabase = require("./Database");

// .ENV file to keep all the configure wee need
require("dotenv").config();

// Defining the server
const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// Routes
const pwdRoutes = require("./routes/pwdRouter");
app.use("/api/v1.0", pwdRoutes);

// Start the Server
try {
  app.listen(process.env.PORT | 3000, () => {
    console.log(`Server Running at: http://localhost:${process.env.PORT}`);
  });
} catch (err) {
  throw boom.boomify(err);
}

// Connect to Database
connectDatabase.connectDatabase();
