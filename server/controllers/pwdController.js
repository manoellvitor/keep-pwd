const boom = require("@hapi/boom")
const express = require("express")

// Getting the Model
const Pwd = require("../models/Pwd")

// GET all passwords
exports.getPasswords = async (req, res) => {
    try {
        const passwords = await Pwd.find()
        res.json(passwords)        
    } catch (err) {
        throw boom.boomify(err)
    }
}

// GET especifique Password by ID
exports.getPasswordById = async (req, res) => {
    try {
        const passwordId = req.params(id)
        const password = await Pwd.find(id)
        res.json(password)        
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add Password
exports.addPassword = async (req, res) => {
    try {
        res.json("HI")       
    } catch (err) {
        throw boom.boomify(err)
    }
}