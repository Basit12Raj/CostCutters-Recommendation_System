const mongoose = require('mongoose');

const ProductSChema = new mongoose.Schema({
    Name: String,
    Image: String,
    Price: String,
})

const Amazon = mongoose.model('Amazon', ProductSChema)

module.exports = Amazon;