const express = require('express');
const router = express.Router();
const Product = require('../Models/Topdeals')

router.get('/:key', async(req,res)=>{
    let result = await Product.find({
      "$or": [
        {
          Name: {$regex: req.params.key, $options: 'i'}
        },
        {
          Link: {$regex: req.params.key}
        },
        {
          Company: {$regex: req.params.key}
        }
      ]
    })
    res.send(result)
  })

  module.exports = router;