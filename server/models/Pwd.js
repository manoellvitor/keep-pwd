const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

// Password Schema
const PasswordSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true } );

module.exports = mongoose.model( "Pwd", PasswordSchema );
