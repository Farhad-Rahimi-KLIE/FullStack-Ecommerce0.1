const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    file : String,
    name : String,
    price : String,
    userId : String
});
const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;