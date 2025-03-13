const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const LikeSchema = new Schema({
    cname: String,
    productId: String,
    productImage: String,
    productPrice: String,
    productName: String,
    pname: String,
})
module.exports = mongoose.model('Like', LikeSchema);