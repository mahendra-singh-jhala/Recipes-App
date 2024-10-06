// import the module mongoose
const mongoose = require("mongoose");

// define the schema for recipe
const recipeSchema = new mongoose.Schema({
    
    title: {
        type: String, required: true
    },

    ingredients: { 
        type: [String], required: true 
    },

    instructions: { 
        type: String, required: true 
    },

    tags: { 
        type: [String], default: [] 
    },

    createdAt: {
        type: Date, default: Date.now
    }
})

// create the recipe modele from schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// exports the model
module.exports = Recipe;