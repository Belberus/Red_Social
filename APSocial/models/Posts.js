var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    link: String,
    content: String,
    views: {type: Number, default: 0},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}] 
});


PostSchema.methods.addview = function(cb) {
    this.views += 1;
    this.save(cb);
};

mongoose.model('Post', PostSchema);
