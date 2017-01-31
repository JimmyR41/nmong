var Event = require('../models/event')
module.exports = {
  showEvents: showEvents,
  singleEvent: singleEvent,
};

//show all events
function showEvents(req,res){
  //create dummy data
  var events = [
    {name: 'Basketball', slug: 'basketball', description: 'Throwing into basket'},
    {name: 'Swimming', slug: 'swimming', description: 'Phelps is fast'},
    {name: 'Weightlifting', slug: 'weightlfting', description: 'Lifting heavy things'}
  ];
  //return a view with data
  res.render('pages/events',{ events: events});
};

function singleEvent(req, res){
  var single = {name: 'Basketball', slug: 'basketball', description: 'Throwing into basket'};
  res.render('pages/single', {single: single});
};
