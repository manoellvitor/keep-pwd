const validator = require( "validator" );
const isEmpty = require( "is-empty" );

module.exports = function validateRegisterInput( data ) {
    let errors = {};

    // Convert empty fields to an empty string to be validated
    data.name = !isEmpty( data.name ) ? data.name : "";
    data.email = !isEmpty( data.email ) ? data.email : "";
    data.password = !isEmpty( data.password ) ? data.password : "";
    data.confirmPassword = !isEmpty( data.confirmPassword ) ? data.confirmPassword : "";

    // Name check
    if ( validator.isEmpty( data.name ) ) {
        errors.name = "Name field is required";
    }

    // Email check
    if ( validator.isEmpty( data.email ) ) {
        errors.email = "Email field is required";
    } else if ( !validator.isEmail( data.email ) ) {
        errors.email = "Email not valid";
    }

    // Password check
    if ( validator.isEmpty( data.password ) ) {
        errors.password = "Password field is required";
    }

    if ( validator.isEmpty( data.confirmPassword ) ) {
        errors.confirmPassword = "Confirm password field is required";
    }

    if ( !validator.isLength( data.password, { min: 10, max: 30 } ) ) {
        errors.password = "Password must be at least 10 characters";
    }

    if ( !validator.equals( data.password, data.confirmPassword ) ) {
        errors.confirmPassword = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty( errors )
    };

};