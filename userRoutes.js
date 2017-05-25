var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var useSchema = new mongoose.Schema({
    name : String,
    contact : String
});

var User = mongoose.model('User',useSchema);


router.get('/users',function(req,res,next) {
    User.find({},function(err,users) {
        res.render('users',{users : users});
    });
    
});

router.post('/users',function(req,res,next) {

    User.create(req.body,function(err,user) {
        res.end();
    });
});

router.delete('/users/:contact',function(req,res,next){
    
    User.remove({contact : req.params.contact},function(err,user){
        res.send();
    });
});

module.exports = router;