const express = require("express")
const { signUp, signIn } = require("../controllers/adminController")
const adminRoute = express.Router()

adminRoute.post("/signup", signUp)
adminRoute.post("/signin", signIn)

module.exports = adminRoute