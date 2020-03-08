var bodyParser = require('body-parser')
var mongoose = require('mongoose') 
//connect to databse
user=process.env.user
mongoose.connect('mongodb+srv://abhinav:pass@cluster0-fbvaq.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });

//vreate a schema
var todoschema =new mongoose.Schema({
    item: String
});

var todo =mongoose.model('todo',todoschema);


// var data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app){
app.get('/todo',function(req,res){
    todo.find({},function(err,data){
        if(err) throw err;
        res.render('todo',{todos:data}); 
    });
    

});
app.post('/todo', urlencodedParser,function(req,res){
    var newtodo=todo(req.body).save(function(err,data){
        if(err) throw err;
        res.json(data);
    })
    
    
   
});
app.delete('/todo/:item',function(req,res){
todo.find({item: req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data){
    if(err) throw err;
});

});
};