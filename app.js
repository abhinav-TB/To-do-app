var express = require('express');
var app=express();
var todocontroller=require('./controller/todocontroller.js')
//set up templkate engine
app.set('view engine','ejs');
app.use(express.static('./public'));
todocontroller(app);
app.listen(3000);
console.log("you are listening to port 3000");