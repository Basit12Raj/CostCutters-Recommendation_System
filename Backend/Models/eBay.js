const mongoose = require('mongoose');

const ProductSChema = new mongoose.Schema({
    Name: String,
    Image: String,
    Price: String,
})

const eBay = mongoose.model('ebay', ProductSChema)

module.exports = eBay;