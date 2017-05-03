var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
    name: String,
    subs: {type: Number, default: 0},
    image: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

CommunitySchema.methods.addsub = function(cb) {
    this.subs += 1;
    this.save(cb);
};

CommunitySchema.methods.decsub = function(cb) {
    this.subs -= 1;
    this.save(cb);
};

mongoose.model('Community', CommunitySchema);
