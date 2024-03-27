const admin = require("../models/admin")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user = require("../models/admin")

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY

const doesUserExist = async (email) => {
    try {
        const adminExist = await user.findOne({ email })
        if (adminExist) return true
        return false
    } catch (error) {
        console.log(error);
        throw error
    }

}

const getHashedPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        console.log(error);
        throw error
    }
}

const createNewUser = async (email, password, username) => {
    try {
        return await admin.create({
            "username": username,
            "email": email,
            "password": password,
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

const generateToken = async (user) => {
    try {
        return await jwt.sign({
            email: user.email,
            id: user._id
        }, SECRET_KEY)
    } catch (error) {
        console.log(error);
        throw error
    }
}

const findUserByEmail = async (email) => {
    try {
        return await admin.findOne({ email })
    } catch (error) {
        console.log(error);
        throw error
    }
}

const comparePassword = async (inputPassword, dbPassword) => {
    try {
        return await bcrypt.compare(inputPassword, dbPassword);
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = {
    doesUserExist,
    getHashedPassword,
    createNewUser,
    generateToken,
    findUserByEmail,
    comparePassword
}