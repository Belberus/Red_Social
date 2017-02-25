var mongoose = require('mongoose');

va CommentSchema = new mongoose.Schema({
    body: String,
    author: String,
    views: {type: Number, default: 0},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

mongoose.model('Comment', CommentSchema);
