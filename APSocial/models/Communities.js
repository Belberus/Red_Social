var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
    name: String,
    subs: Number,
    image: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});


mongoose.model('Community', CommunitySchema);
