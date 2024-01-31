const express = require('express')
const router = express.Router();
const Product = require('../Models/Topdeals')

// <====== Endpoint to fetch products ========>
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = router;