const express = require("express")
const categoryRoute = express.Router()
const auth = require("../middlewares/auth")
const { getCategory, addCategory, updateCategory, deleteCategory } = require("../controllers/categoryController")

categoryRoute.get("/", auth, getCategory)
categoryRoute.post("/add", auth, addCategory),
    categoryRoute.put("/:id", auth, updateCategory)
categoryRoute.delete("/:id", auth, deleteCategory)

module.exports = categoryRoute