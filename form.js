const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productPrice: Number,
  productImage: String,
  pname : String 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
