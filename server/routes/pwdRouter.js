const express = require("express");
const boom = require("@hapi/boom");
const pwdController = require("../controllers/pwdController");

const router = express.Router();

// GET all Passwords
router.get("/passwords", async (req, res) => {
  try {
    await pwdController.getPasswords(req, res);
  } catch (err) {
    throw boom.boomify(err);
  }
});

// GET specifique Password by ID
router.get("/password/:id", async (req, res) => {
  try {
    await pwdController.getPasswordById(req, res);
  } catch (err) {
    throw boom.boomify(err);
  }
});

// Add Password
router.post("/addPassword", async (req, res) => {
  try {
    await pwdController.addPassword(req, res);
  } catch (err) {
    throw boom.boomify(err);
  }
});

// Delete especifique Password
router.delete("/deletePassword/:id", async (req, res) => {
  try {
    await pwdController.deletePassword(req, res);
  } catch (err) {
    throw boom.boomify(err);
  }
});
module.exports = router;
