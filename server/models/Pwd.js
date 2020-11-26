const mongoose = require("mongoose");

// Password Schema
const passwordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  password: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Pwd", passwordSchema);
