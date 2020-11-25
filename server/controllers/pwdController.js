const boom = require("@hapi/boom")

// Getting the Model
const Pwd = require("../models/Pwd")

// GET all passwords
exports.getPasswords = async () => {
    try {
        const passwords = await Pwd.find()
        return passwords
    } catch (err) {
        throw boom.boomify(err)
    }
}