const express = require("express")
const { getAllBooks, getBooksByCategory, getBooksByName, addBook, updateBook, deleteBook } = require("../controllers/bookController")
const auth = require("../middlewares/auth")
const bookRoute = express.Router()

bookRoute.get("/all-books", auth, getAllBooks)
bookRoute.get("/category/:id", auth, getBooksByCategory)
bookRoute.get("/:id", auth, getBooksByName)
bookRoute.post("/add-book", addBook)
bookRoute.put("/:id", auth, updateBook)
bookRoute.delete("/:id", auth, deleteBook)

module.exports = bookRoute