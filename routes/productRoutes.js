const express = require("express");

const router = express.Router();

const { getProducts } = require("../controllers/productController");
const {getProductById} = require("../controllers/productController");
const {createProduct}  = require("../controllers/productController");
const {updateProduct} = require("../controllers/productController");
const {deleteProduct} = require("../controllers/productController");
router.get("/", getProducts);

router.get("/:id" , getProductById);

router.post("/" , createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id"  , deleteProduct);

module.exports = router;