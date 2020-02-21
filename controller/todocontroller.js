var bodyParser = require('body-parser')

var data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app){
app.get('/todo',function(req,res){
    res.render('todo',{todos:data}); 
console.log("hey");
});
app.post('/todo', urlencodedParser,function(req,res){
    console.log("hello");
    data.push(req.body);
    
    res.json(data);
});
app.delete('/todo/:item',function(req,res){
    data=dat.filter(function(todo){
        return todo.item.replace(/)
    })


});
};