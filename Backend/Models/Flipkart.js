const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: String,
    Image: String,
    Price: String,
})

const Flipkart = mongoose.model('Flipkart', ProductSchema)

module.exports = Flipkart;