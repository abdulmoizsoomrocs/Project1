require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const app = express();
const Port = 8000;

connectDB()
.then(() =>{
    console.log("MongoDB Connected Successfully");
})
.catch((err) =>{
    console.log("MongoDB connection Failed");
    console.log(err.message);
})
app.listen(PORT , ()=>{
    console.log(`running on port ${Port}`);
})

