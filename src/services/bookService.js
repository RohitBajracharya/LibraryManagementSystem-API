const Book = require("../models/book");
const category = require("../models/category");

const findAllBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findBooksByCategory = async (category) => {
    try {
        return await Book.find({ category });
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findBooksByName = async (name) => {
    try {
        return await Book.findOne({ name })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const addNewBook = async (name, bookQuantity, categoryId) => {
    const newBook = new Book({
        name: name,
        bookQuantity: bookQuantity,
        category: categoryId
    })
    try {
        return await newBook.save()
    } catch (error) {
        console.log(error)
        throw error
    }
}

const removeBook = async (bookId) => {
    try {
        await Book.findByIdAndDelete(bookId)
    } catch (error) {
        console.log(error)
        throw error
    }
}

const updateBookById = async (name, bookQuantity, categoryId, bookId) => {
    const book = {
        name: name,
        bookQuantity: bookQuantity,
        category: categoryId
    }
    try {
        await Book.findByIdAndUpdate(bookId, book, { new: true })
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    findAllBooks,
    findBooksByCategory,
    findBooksByName,
    addNewBook,
    removeBook,
    updateBookById
}