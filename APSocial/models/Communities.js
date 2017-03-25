var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
    title: String,
    subs: Number,


    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]

});


mongoose.model('Community', CommunitySchema);
