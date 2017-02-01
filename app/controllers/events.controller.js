var Event = require('../models/event');
module.exports = {
  showEvents: showEvents,
  singleEvent: singleEvent,
  seedEvents: seedEvents,
};

//show all events
function showEvents(req,res){
  //get all events


  //return a view with data
  res.render('pages/events',{ events: events});
};

//show single event
function singleEvent(req, res){
  var single = {name: 'Basketball', slug: 'basketball', description: 'Throwing into basket'};
  res.render('pages/single', {single: single});
};

//seed events 
function seedEvents(req, res){
  var events = [
    {name: 'Basketball', description: 'Throwing into basket'},
    {name: 'Swimming', description: 'Phelps is fast'},
    {name: 'Weightlifting', description: 'Lifting heavy things'},
    {name: 'ping-pong', description: 'fast stuff'}
  ];
  Event.remove({}, () => {
    for (event of events){
      var newEvent = new Event(event);
      newEvent.save();
    };
  });

  res.send('database seeded!');
};
