const express = require( "express" );
const router = express.Router();
const boom = require( "@hapi/boom" );
const userController = require( "../controllers/userController" );

// Register User
router.post( "/register", async ( req, res ) => {
    try {
        await userController.register( req, res );
    } catch ( err ) {
        throw boom.boomify( err );
    }
} );

module.exports = router;