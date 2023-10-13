const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51N7NbKCH1XudwKKgQVddNCrctxvSFpepCWLLgE4awJVrYtxxIcgwmLW7DoHMrxPIb0I5TkpecL08Wf7xp8oDpjRX00371eqAH1');
// router endpoints
router.post('/intents',async (req, res) =>{
    try{    
        //create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:'usd',
        automatic_payment_methods:{
            enabled:true
        }
    })
    //return the secret
    res.json({paymentIntent:paymentIntent.client_secret});
}catch (e){
    res.status(400).json({
        error: e.message,
    });
}


});
module.exports = router;