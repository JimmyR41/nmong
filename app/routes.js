var express = require('express');

//create and export router obj
var router = express.Router();
module.exports = router;

//import route functions
var siteController = require('./controllers/site.controller');
var eventsController = require('./controllers/events.controller');


//set routes via stubs/prototypes
router.get('/', siteController.homePage);
router.get('/events', eventsController.showEvents);
router.get('/events/seed', eventsController.seedEvents);

router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);
//make sure this is last for events ... 
router.get('/events/:slug', eventsController.singleEvent);
