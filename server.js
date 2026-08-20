require("dotenv").config();
const express = require("express");

// const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();
const PORT = 8000;

app.use(express.json());

connectDB()
.then(() =>{
    console.log("MongoDB Connected Successfully");
})
.catch((err) =>{
    console.log("MongoDB connection Failed");
    console.log(err.message);
});

app.use("/api/products", productRoutes);

app.use(errorMiddleware);
app.listen(PORT , ()=>{
    console.log(`running on port ${PORT}`);
})

