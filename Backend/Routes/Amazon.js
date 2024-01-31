const express = require('express');
const router = express.Router();
const Amazon = require('../Models/Amazon')

router.get('/', async(req, res)=>{
    try {
        const amazon = await Amazon.find({});
        res.json(amazon)
    } catch (error) {
        res.status(500).json({msg: 'error'})
    }
})

module.exports = router;