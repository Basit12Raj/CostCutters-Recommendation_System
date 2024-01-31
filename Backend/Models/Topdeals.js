const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        Name: String,
        Image: String,
        Price: String,
    });
    const Product = mongoose.model('topdeals', productSchema);
module.exports =  Product;


