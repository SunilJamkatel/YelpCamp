var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var data = [
  {
    name:"Cloud's Rest",
    image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
    description: "blah blah blah blah"
  },
  {
    name:"Mediterrian Love",
    image: "https://farm6.staticflickr.com/5319/7407436246_0ac54dd559.jpg",
    description: "blah blah blah blah"
  },
  {
    name:"Cloud's Taste",
    image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg",
    description: "blah blah blah blah"
  }
]

function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("removed Campgrounds");
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else {
            console.log("added a campground");
            Comment.remove({});
            Comment.create(
              {
                text: "This place is great but I wish I didn't have windows in my tent",
                author: "Desperate Hem"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created a new comment");
                }
              }
            )}
        });
      });
    }
  });

}

module.exports = seedDB;
