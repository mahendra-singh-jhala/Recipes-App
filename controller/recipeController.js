// import the recipeModel
const Recipe = require("../model/recipeModel");

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch(error) {
        res.status(400).json({
            message: "Not Created", 
            error: error.message
        })
    }
}


// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find()
        res.status(200).json(recipe);
    } catch(error) {
        res.status(500).json({
            message: "Error fetching the recipes",
            error: error.message
        })
    }
}


// Get recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe);
    } catch(error) {
        res.status(500).json({
            message: "Error fetching the recipe", 
            error: error.message
        })
    }
}


// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe);
    } catch(error) {
        res.status(400).json({
            message: "Error Updating the recipe", 
            error: error.message
        })
    }
}


// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(204).send();
    } catch(error) {
        res.status(400).json({
            message: "Error deleting the recipe", 
            error: error.message
        })
    }
}
