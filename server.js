//requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var morgan =require('morgan');
var port = process.env.PORT || 8080;

//set view engine
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

//set router
var router = require('./app/routes');
app.use('/',router);


//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
