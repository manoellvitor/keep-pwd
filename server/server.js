const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const boom = require("@hapi/boom");

const connectDatabase = require("./Database");

// .ENV file to keep all the configure wee need
require("dotenv").config();

// Instance off express
const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
const pwdRoutes = require("./routes/pwdRouter");
app.use("/api/v1.0", pwdRoutes);

// Defining the Server
const startServer = () => {
    try {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server Running at: http://localhost:${process.env.PORT}`);
        });
    } catch (err) {
        throw boom.boomify(err);
    }
}


// Starting the Server
startServer();

// Connect to Database
connectDatabase();
