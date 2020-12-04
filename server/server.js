const express = require( "express" );
const helmet = require( "helmet" );
const cors = require( "cors" );
const bodyParser = require( "body-parser" );
const boom = require( "@hapi/boom" );
const connectDatabase = require( "./Database" );
const passport = require( "passport" );

// .ENV file to keep all the configure wee need
require( "dotenv" ).config();

// Instance off express
const app = express();

// Middlewares
app.use( helmet() );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( passport.initialize() );

// Routes
const pwdRoutes = require( "./routes/pwdRouter" );
const userRoutes = require( "./routes/userRouter" );
app.use( "/api/v1.2", pwdRoutes );
app.use( "/api/v1.2", userRoutes );

// Defining the Server
const startServer = () => {
    try {
        app.listen( process.env.PORT || 5000, () => {
            console.log( `Server Running at: http://localhost:${ process.env.PORT }` );
        } );
    } catch ( err ) {
        throw boom.boomify( err );
    }
};


// Starting the Server
startServer();

// Connect to Database
connectDatabase();

require( "./helpers/passport" )( passport );