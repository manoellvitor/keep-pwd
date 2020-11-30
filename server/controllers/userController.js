const express = require( "express" );
const router = express.Router();
const bcrypt = require( "bcryptjs" );
const jwt = require( "jsonwebtoken" );
const userController = require( "../controllers/userController" );

// Load input validation
const validateRegisterInput = require( "../helpers/validation/register" );
const validateLoginInput = require( "../helpers/validation/login" );

// Load User model
const User = require( "../models/User" );

exports.register = async ( req, res ) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput( req.body );

    // Check validation
    if ( !isValid ) {
        return res.status( 400 ).json( errors );
    }

    User.findOne( { email: req.body.email } ).then( user => {
        if ( user ) {
            return res.status( 400 ).json( {
                Email: "Email already exists"
            } );
        } else {
            const newUser = new User( {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            } );

            // Hash password before saving into DB
            bcrypt.genSalt( 10, ( err, salt ) => {
                bcrypt.hash( newUser.password, salt, ( err, hash ) => {
                    newUser.password = hash;
                    newUser
                        .save()
                        .then( user => res.json( user ) )
                        .catch( err => console.log( err ) );
                } );
            } );
        }
    } );
};