const mongoose = require("mongoose")

const passwordSchema = new mongoose.Schema({
    _id:    Schema.types.ObjectId,
    title:  String,
    description:    String,
    password:   String,
})

module.exports = mongoose.model("Pwd", passwordSchema)