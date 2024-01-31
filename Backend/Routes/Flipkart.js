const express = require('express');
const router = express.Router();
const Flipkart = require('../Models/Flipkart')

router.get('/', async(req, res)=>{
    try {
        const amazon = await Flipkart.find({});
        res.json(amazon)
    } catch (error) {
        res.status(500).json({msg: 'error'})
    }
})

module.exports = router;