//requirements
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var morgan = require('morgan');
var port = process.env.PORT || 8080;

//congfigs
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//connect to db
mongoose.connect(process.env.DB_URI);
//set routes
var router = require('./app/routes');
app.use('/',router);


//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
