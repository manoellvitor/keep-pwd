const boom = require("@hapi/boom");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.KEY);
//const securePassword = require("../helpers/securePassword")

// Getting the Model
const Pwd = require("../models/Pwd");

// GET all passwords
exports.getPasswords = async (req, res) => {
  try {
    const passwords = await Pwd.find();
    res.json(passwords);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// GET especifique Password by ID
exports.getPasswordById = async (req, res) => {
  try {
    const password = await Pwd.findById(req.params.id);
    if (password == null) {
      return res.status(404).json({
        Message: "Cant find password...",
      });
    }else {
    res.json(password);
    // NEED TO WORK ON THIS LOGIC
    const rawPassword = await cryptr.decrypt(password.password);
    console.log(rawPassword);
    }
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add Password
exports.addPassword = async (req, res) => {
  try {
    const password = req.body;
    const encryptedPwd = cryptr.encrypt(password.password);
    const newPassword = await new Pwd({title: password.title, description: password.description, password: encryptedPwd});
    newPassword.save();
    res.status(201).json({
      Message: "Password saved...",
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete especifique Password
exports.deletePassword = async (req, res) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const password = await Pwd.findByIdAndDelete(id);
    if (password) {
      res.status(200).json({
        Message: "Password Deleted!",
      });
    } else {
      res.status(404).json({
        Message: "Cant find Password...",
      });
    }
  } catch (err) {
    throw boom.boomify(err);
  }
};
