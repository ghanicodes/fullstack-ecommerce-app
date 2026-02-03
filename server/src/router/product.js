const express = require("express");
const {Product} = require('../model/product')
const { addProductValidation } = require("../lib/utils");
const { adminMiddleware } = require("../middleware/admin.auth");
const productRouter = express.Router();

// Add Product Route 
productRouter.post('/addproduct', adminMiddleware, async (req, res)=>{
try {

     addProductValidation(req);
    const {name, price, description, category} = req.body;
   
    const newProduct = new Product({
    name,
    price,
    description,
    category
  });

  await newProduct.save();

  res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
    
} catch (error) {
    console.log("Add Product Error : ", error.message);
    res.status(401).json({
      "Add Product Error ": error.message,
    });
}

});



productRouter.get("/allProducts", async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      message: "All Products fetched successfully",
      products, 
    });
  } catch (error) {
    console.error("Get All Products Error:", error.message);
    res.status(500).json({
      error: error.message,
    });
  }
});




module.exports = {
    productRouter
}