const category = require("../models/category");
const { getAllCategory, saveCategory, doesCategoryExist, editCategoryById, deleteCategoryById, } = require("../services/categoryService");


const getCategory = async (req, res) => {
    try {
        const category = await getAllCategory();
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}


const addCategory = async (req, res) => {
    const { name, bookQuantity } = req.body
    try {
        const categoryExist = await doesCategoryExist(name);
        if (categoryExist) {
            return res.status(400).json({ message: "Category already exist" })
        }
        await saveCategory(name, bookQuantity);
        res.status(201).json({ message: "New Category added" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update category" })
    }
}


const updateCategory = async (req, res) => {
    const { name, bookQuantity } = req.body
    const categoryId = req.params.id;
    try {
        await editCategoryById(name, bookQuantity, categoryId);
        res.status(201).json({ message: "Category updated successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update category" })
    }
}

const deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        await deleteCategoryById(categoryId);
        res.status(201).json({ message: "Category deleted successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete category" })
    }
}

module.exports = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
}