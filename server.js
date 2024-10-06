const express = require("express");
const bodyParser = require("body-parser"); // importing the body-parser to handle json bodies, request or response
const connectDB = require("./config/db"); 
const recipeRoutes = require("./router/recipeRouter");

// initialize enviormment variables
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// contect to the mongodb database
connectDB();

// middleware to parse JSON
app.use(bodyParser.json());

// routes
app.use("/api/recipes", recipeRoutes);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running at the URL http://localhost:${PORT}`)
}) 
