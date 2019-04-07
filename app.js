
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extend:false});
app.set('view engine', 'ejs');

app.use('/assets',express.static('public/assets'));
/*
app.use('/public',function(req,res,next){
    console.log(req.url);
    next();
});
*/

app.get('/', function(req,res){
    //    res.sendFile(__dirname + "/index.html");
    res.render("index");
});

app.get('/contact',function(req,res){
    //    res.sendFile(__dirname + '/contact.html');
//    console.log(req.query);
    res.render("contact",{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
//    console.log(req.body);
    res.render("user",{data:req.body});
});

app.get('/profile/:id',function(req,res){
    var data = {age:19,job:'engine',hobbies:['apple','orange','pitch']};
    res.render('profile',{id : req.params.id, data:data});
});

app.listen(3000,function(){
    console.log("now listening at 3000");
});
