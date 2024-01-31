const express = require('express');
const router = express.Router();
const eBay = require('../Models/eBay')

router.get('/', async(req, res)=>{
    try {
        const amazon = await eBay.find({});
        res.json(amazon)
    } catch (error) {
        res.status(500).json({msg: 'error'})
    }
})

module.exports = router;