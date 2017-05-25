var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    itemName : String,
    price : Number,
    rating : Number
});

var Product = mongoose.model('Product',productSchema);


router.get('/items',function(req,res,next) {
    Product.find({},function(err,items) {
       
        res.render('items',{items : items});
    });
});

router.post('/items',function(req,res,next) {
    Product.create(req.body,function(err,item) {
        console.log('user saved '+ item);
        res.end();
    });
});

router.put('/items/:id',function(req,res,next) {
  
  Product.findByIdAndUpdate(req.params.id,req.body,{new : true},function(err,item) {
      res.send(item);
  });
});

router.delete('/items/:itemName',function(req,res,next) {
  Product.remove({itemName : req.params.itemName},function(err,user){
        res.send();
    });
});

module.exports = router;