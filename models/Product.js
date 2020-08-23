const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    creator: String,
    imgUrl: String,
    quantity: Number,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
