const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../database/products');
router.get('/', async (req,res) =>{
    const products = await getAllProducts();
    console.log(products);
    res.send({ status: 'OK', data: products });
  
});
router.get('/:productId', async(req,res)=>
{
    console.log('Query product with id',req.params.productId)
    try{
    const product = await getProduct(req.params.productId);
        if(!product){
     res.status().send({ status: 'FAILED',error: 'Product not found' });
    return;}
    res.send({ status: 'OK', data: product });
    }catch (e) {
        res.status(401).send({status: 'FAILED', error: e.message});
    }
});



module.exports = router;