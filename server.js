var http = require('http');
var hbs = require('hbs');
var express = require('express');
var fs = require('fs');
app = express();
app.set('view engine','hbs');
app.use((req,res,next)=>{
  console.log(req.method+" "+req.url);
  var x = req.method+" "+req.url;
  fs.appendFile('./info.log',x + '\n');
  next();
});
hbs.registerPartials(__dirname + '/views/partials');
app.get('/',(req,res)=>{
  res.send("<p>My name is pratyush priyam kuanr</p>")
});
app.get('/html',(req,res)=>{
  res.render('help.hbs',{age : 21,race : "general"});
});
app.listen(3000);
console.log("server is starting");
