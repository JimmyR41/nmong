var express = require('express');

//create and export router obj
var router = express.Router();
module.exports = router;

//import route functions
var siteController = require('./controllers/site.controller');
var eventsController = require('./controllers/events.controller');


//set routes via stubs/prototypes
//main routes
router.get('/', siteController.homePage);
//event routs
router.get('/events', eventsController.showEvents);
//seed route
router.get('/events/seed', eventsController.seedEvents);
//create events
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

//edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug', eventsController.processEdit);

//delete events

//make sure this is last for events ...
router.get('/events/:slug', eventsController.singleEvent);
