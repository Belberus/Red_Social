//Mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');

require('./models/Posts');
require('./models/Comments');
require('./models/Communities');


// Method that fills database with communities taken from Twitch APIs JSON
var Community = mongoose.model('Community');
var json = require('./juegostwitch.json');
var com;


for (i = 0; i < json["_total"]; i++) {
    console.log(i);
    com = new Community();
    com.name = json.top.game[i].name;
    com.subs = 0;
    com.image = json.top.game[i].box.large;
    com.save(function (err, post) {
        if (err) {
            return next(err);
        }

        res.json(com);
    });
}


