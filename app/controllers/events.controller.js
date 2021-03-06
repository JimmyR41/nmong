var Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  singleEvent: singleEvent,
  seedEvents: seedEvents,
  showCreate: showCreate,
  processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit,
};

//show all events
function showEvents(req,res){
  //get all events
  Event.find({}, (err, events) => {
    if (err){
      res.status(404);
      res.send('Events not found!');
    }
    //return a view with data now I can use event obj in the view
    res.render('pages/events',{
      events: events,
      success: req.flash('success'),
    });
  });
};

//show single event
function singleEvent(req, res){
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err){
      res.status(404);
      res.send('Event not found!');
    };
    res.render('pages/single', {
      event: event,
      success: req.flash('success')
     });
  });
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

function showCreate(req,res){
  res.render('pages/create',{
    errors: req.flash('errors'),
  });

};

function processCreate(req,res){
  req.checkBody('name', 'Must enter a name').notEmpty();
  req.checkBody('description', 'Must enter a description').notEmpty();

  var errors = req.validationErrors();

  if (errors){
    req.flash('errors',errors.map(err => err.msg));
    return res.redirect('/events/create');
  };
  const event = new Event({
    name: req.body.name,
    description: req.body.description
  });

  event.save((err) => {
    if (err)
      throw err;
      //redirect to the new page
    req.flash('success', "Successfully Created Event");
    res.redirect(`/events/${event.slug}`);
  });
};

//view for event editing
function showEdit(req,res){
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    res.render('pages/edit', {
    event: event,
    errors: req.flash('errors'),
    });
  });
};

// action on event editing form
function processEdit(req,res){
  req.checkBody('name', 'Must enter a name').notEmpty();
  req.checkBody('description', 'Must enter a description').notEmpty();

  var errors = req.validationErrors();

  if (errors){
    req.flash('errors',errors.map(err => err.msg));
    return res.redirect(`/events/${req.params.slug}/edit`);
  };

  //find current event
  Event.findOne({ slug: req.params.slug}, (err,event) =>{
    //update that event
    event.name = req.body.name;
    event.description = req.body.description;

    event.save((err)=>{
      if (err)
        throw err;

      req.flash('success', "Successfully updated event.");
      res.redirect('/events');
    });
  });

  //redirect user to /events

};
