var mongoose = require('mongoose');
  Schema = mongoose.Schema;

  //create Schema
  var eventSchema = new Schema({
    name: String,
    slug:{
      type: String,
      unique: true
    },
    description: String
  });

//middelware
//make sure slug is created from the name
eventShcema.pre('save',function(next){
  this.slug = slugify(this.name);
  next();
});

  //create model
  var eventModel = mongoose.model('Event', eventSchema);

  //export model
  module.exports = eventModel;

  // function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};
