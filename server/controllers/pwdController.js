const boom = require( "@hapi/boom" );
const Cryptr = require( "cryptr" );
const cryptr = new Cryptr( process.env.KEY );

// Getting the Model
const Pwd = require( "../models/Pwd" );

// GET all passwords
exports.getPasswords = async ( req, res ) => {
    try {
        const passwords = await Pwd.find();
        res.json( passwords );
    } catch ( err ) {
        throw boom.boomify( err );
    }
};

// GET especifique Password by ID
exports.getPasswordById = async ( req, res ) => {
    try {
        const password = await Pwd.findById( req.params.id );
        if ( password == null ) {
            return res.status( 404 ).json( {
                Message: "Cant find password...",
            } );
        } else {
            res.json( password );
            // NEED TO WORK ON THIS LOGIC
            const rawPassword = await cryptr.decrypt( password.password );
            console.log( rawPassword );
        }
    } catch ( err ) {
        throw boom.boomify( err );
    }
};

// Add Password
exports.addPassword = async ( req, res ) => {
    try {
        const password = req.body;
        const encryptedPwd = cryptr.encrypt( password.password );
        const newPassword = await new Pwd( { title: password.title, description: password.description, password: encryptedPwd } );
        newPassword.save();
        res.status( 201 ).json( {
            Message: "Password saved...",
        } );
    } catch ( err ) {
        throw boom.boomify( err );
    }
};

// Update Especifique Password
exports.updatePassword = async ( req, res ) => {
    const id = req.params === undefined ? req.id : req.params.id;
    const newPassword = req.body;
    newPassword.password = cryptr.encrypt( newPassword.password );
    if ( id == null ) {
        res.status( 400 ).json( {
            Message: "Password not found..."
        } );
    } else {
        const updatedPassword = await Pwd.findByIdAndUpdate( id, newPassword, { new: true } );
        res.status( 200 ).json( {
            Message: "Password Updated..."
        } );
    }

};

// Delete especifique Password
exports.deletePassword = async ( req, res ) => {
    const passwordId = req.params.id;

    try {
        const password = await Pwd.findById( passwordId );
        if ( password == null ) {
            res.status( 404 ).json( {
                Message: "Password not found..."
            } );
        } else {
            const deletedPassword = await Pwd.findByIdAndDelete( passwordId );
            res.status( 200 ).json( {
                Message: "Password Deleted"
            } );
        }
    } catch ( err ) {
        throw boom.boomify( err );
    }

};
