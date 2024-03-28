const Category = require("../models/category")

const getAllCategory = async () => {
    try {
        return await Category.find()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const doesCategoryExist = async (name) => {
    try {
        const categoryExist = await Category.findOne({ name })
        if (categoryExist) return true
        return false

    } catch (error) {
        console.log(error);
        throw error;
    }
}


const saveCategory = async (name, bookQuantity) => {
    try {
        const newCategory = new Category({
            name: name,
            bookQuantity: bookQuantity
        });
        return await newCategory.save()
    } catch (error) {
        console.log(error)
        throw error
    }
}

const editCategoryById = async (name, bookQuantity, categoryId) => {
    try {
        const newCategory = {
            name: name,
            bookQuantity: bookQuantity
        };
        return await Category.findByIdAndUpdate(categoryId, newCategory, { new: true })
    } catch (error) {
        console.log(error)
        throw error
    }
}


const deleteCategoryById = async (categoryId) => {
    try {
        return await Category.findByIdAndDelete(categoryId)
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findCategoryByName = async (name) => {
    try {
        return await Category.findOne({ name })
    } catch (error) {
        console.log(error)
        throw error
    }
}




module.exports = {
    getAllCategory,
    doesCategoryExist,
    saveCategory,
    editCategoryById,
    deleteCategoryById,
    findCategoryByName,
}