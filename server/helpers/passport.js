const JwtStrategy = require( "passport-jwt" ).Strategy;
const ExtractJwt = require( "passport-jwt" ).ExtractJwt;
const mongoose = require( "mongoose" );
const User = mongoose.model( "User" );

// .ENV file to keep all the configure wee need
require( "dotenv" ).config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.KEY;

module.exports = passport => {
    passport.use(
        new JwtStrategy( opts, ( jwt_payload, done ) => {
            User.findById( jwt_payload.id )
                .then( user => {
                    if ( user ) {
                        return done( null, user );
                    }
                    return done( null, false );
                } )
                .catch( err => console.log( err ) );
        } )
    );
};