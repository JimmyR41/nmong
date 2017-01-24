var express = require('express');

//create and export router obj
var router = express.Router();
module.exports = router;

//import route functions
var siteController = require('./controllers/site.controller');

//set routes via stubs/prototypes
router.get('/', siteController.homePage);
router.get('/events', siteController.events);
