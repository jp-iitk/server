var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://jp.iitk:sanj8960@ds149501.mlab.com:49501/deliveryjp');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/',function(req,res) {
    
    res.render('index');
});

app.use('/api',require('./userRoutes.js'));
app.use('/api',require('./productRoutes.js'));

app.listen(process.env.post || 3000,function() {
    
    console.log('Server has started at port 3000');
});
