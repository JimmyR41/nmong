module.exports = {
  homePage: homePage,
  events: events,
};

function homePage(req,res){
  res.render('pages/index');
};

function events(req,res){
  res.render('pages/events');
}
