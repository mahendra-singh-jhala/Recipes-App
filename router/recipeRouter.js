// import the module express
const express = require("express");

// creating a router
const router = express.Router();

// import the rescipe controller
const recipeController = require("../controller/recipeController");

// route for adding a new recipe (Post request)
router.post("/", recipeController.createRecipe);

// router to getting all the recipe (GET request)
router.get("/", recipeController.getAllRecipes);

// router to handle Get request for fetching a specific recipe by ID
router.get("/:id", recipeController.getRecipeById);

// router to handle PUT request for fully update a recipe by ID
router.put("/:id", recipeController.updateRecipe);

// router to handle DELETE request for deleting a recipe by ID
router.delete("/:id", recipeController.deleteRecipe);


// // export the router
module.exports = router;