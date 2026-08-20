
const Product = require("../models/Product");
const getProducts = async (req , res) => {
    
    const products = await Product.find({
        category : req.query.category
    });
    console.log(products);

    res.json(products);
};

const getProductById = async (req , res) => {


    const product = await Product.findById(req.params.id);

    if(!product){
         return res.status(404).json({
            message: "product not found"
        });
    }

    res.json(product);

 
};

const createProduct = async (req, res , next) =>{
    try {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            inStock: req.body.inStock
        });

        res.status(201).json(product);

    } catch (err) {
        next(err);
    }
};

const deleteProduct = async (req , res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.json({
        message :"product deleted successfully",
        product
    });
}

const updateProduct = async (req , res) =>{
    const product = await Product.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new : true}
    );

    if(!product){
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.json(product);
};

module.exports ={
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};