const book = require("../models/book");
const { findAllBooks, findBooksByCategory, findBooksByName, addNewBook, removeBook, updateBookById } = require("../services/bookService");
const { findCategoryByName } = require("../services/categoryService");
const { updateCategoryBook } = require("./categoryController");

const getAllBooks = async (req, res) => {
    try {
        const books = await findAllBooks()
        if (books.length == 0) {
            return res.status(404).json({ message: "There are no books available" });
        }
        res.status(200).json(books);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const getBooksByCategory = async (req, res) => {
    const category = req.params.id;
    try {
        const books = await findBooksByCategory(category);
        if (books.length == 0) {
            return res.status(404).json({ message: "There are no books available in this category" });
        }
        res.status(200).json(books);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const getBooksByName = async (req, res) => {
    const name = req.params.id;
    try {
        const book = await findBooksByName(name)
        if (book.length == 0) {
            return res.status(404).json({ message: "Book Not Found" })
        }
        res.status(200).json(book)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const addBook = async (req, res) => {
    const { name, bookQuantity, categoryName } = req.body
    try {
        const category = await findCategoryByName(categoryName)
        console.log("category id: ", category._id)
        await addNewBook(name, bookQuantity, category._id)
        res.status(200).json({ message: "Book added successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to add book" })
    }
}

const deleteBook = async (req, res) => {
    const bookId = req.params.id
    try {
        await removeBook(bookId);
        res.status(200).json({ message: "Book Deleted Successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to delete book" })
    }
}

const updateBook = async (req, res) => {
    const { name, bookQuantity, categoryName } = req.body
    const bookId = req.params.id;
    try {
        const category = await findCategoryByName(categoryName)
        await updateBookById(name, bookQuantity, category._id, bookId)
        res.status(200).json({ message: "Book Updated Succesfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to update book" })
    }
}


module.exports = {
    getAllBooks,
    getBooksByCategory,
    getBooksByName,
    addBook,
    deleteBook,
    updateBook
}