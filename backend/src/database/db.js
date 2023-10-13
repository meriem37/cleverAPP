const {MongoClient}  = require('mongodb');
const uri = 'mongodb+srv://chettirchettir:z3mhzJkMHuOMvUSJ@cluster0.lhvqrox.mongodb.net/?retryWrites=true&w=majority';
let client;
const getDB = () => { 
     if (!client) {

    console.log('Creating a new client!');
    client = new MongoClient(uri);
  }else{
    console.log('Reusing the old client');
  }
const database = client.db('db');
const products = database.collection('products');
const orders = database.collection('orders');
return {
products,
    orders,
};
};
module.exports = getDB;