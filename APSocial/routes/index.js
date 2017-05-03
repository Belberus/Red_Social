var express = require('express');
//var ObjectId = require('mongodb').ObjectId;
var router = express.Router();
var mongoose = require('mongoose');
var Community = mongoose.model('Community');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var passport = require('passport');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

////////
//HOME//

router.get('/home', function(req, res, next) {
    Community.find(function(err,communities){
        if(err){ return next(err);}

        res.json(communities);
    });
});

router.post('/home', function(req, res, next) {
    var com = new Community(req.body);
    com.name= req.query.name;
    com.subs= 0;
    com.image = req.query.image;
    com.save(function(err, post){
        if(err){return next(err);}

        res.json(com);
    });
});

/////////////////
//SUSCRIPCIONES//

router.get('/mycommunities', auth, function(req, res, next){
    req.user.populate('communities', function(err, user){
        if(err){return next(err);}

        res.json(user.communities);
    });
});

router.put('/community/:community/sub',auth, function(req, res, next){
    var communityid=req.community._id;
    User.update({'username': req.payload.username}, {$addToSet: {communities: communityid}}, function(err,affected){
        if(err){return next(err);}
        if(affected.nModified>0){req.community.addsub();}
        Community.findById(communityid,function(err, community){
            if(err){return next(err);}

            res.json(community);
        })
    });
});

router.delete('/community/:community/sub', auth, function(req, res, next){
    var community = req.community._id;
    User.update({'username': req.payload.username}, {$pull: {communities: ObjectId("\""+community+"\"")}},function(err,affected){
        if(err){return next(err);}
        if(affected.nModified>0){req.community.decsub();}

        res.send("Desuscrito");
    });

});

//////////////////////////////////////////////////////
/////////////////Parametros///////////////////////////

router.param('community', function(req, res, next, id) {
    var query = Community.findById(id);

    query.exec(function (err, community){
        if(err) { return next(err); }
        if(!community) {return next(new Error('Can\'t find Community.')); }
        req.community = community;
        return next();
    });
});

router.param('post', function(req, res, next, id) {
    var query = Post.findById(id);

    query.exec(function (err, post){
        if(err) { return next(err); }
        if(!post) {return next(new Error('Can\'t find post.')); }
        req.post = post;
        return next();
    });
});

router.param('comment', function(req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function(err, comment){
        if(err) { return next(err); }
        if(!comment) { return next(new Error('Cant\'t find comment.')); }

        req.comment = comment;
        return next();
    });
});

///////////////////////////////////////////////////////////////////////

router.get('/community/:community', function(req, res, next) {
    req.community.populate('posts', function(err, community) {
        if(err) {return next(err); }

        res.json(community);
    });
});



router.post('/community/:community/posts', auth, function(req,res,next) {
    var post = new Post(req.body);
    post.community = req.community;
    post.author = req.payload.username;
    post.save(function(err, post){
        if(err){return next(err); }

        req.community.posts.push(post);
        req.community.save(function(err, community) {
            if(err){ return next(err); }

            res.json(post);
        });
    });
});

router.get('/community/:community/posts/:post', function(req, res, next) {
    req.post.populate('comments', function(err, post) {
        if(err) {return next(err); }

        res.json(post);
    });
});

router.put('/community/:community/posts/:post/addview', function(req, res, next) {
    req.post.addview(function(err, post){
        if(err) { return next(err); }

        res.json(post);
    });
});

router.post('/community/:community/posts/:post/comments', auth, function(req,res,next) {
    var comment = new Comment(req.body);
    comment.post = req.post;
    comment.author = req.payload.username;
        comment.save(function(err, comment){
            if(err){return next(err); }

            req.post.comments.push(comment);
            req.post.save(function(err, post) {
                if(err){ return next(err); }

                res.json(comment);
            });
        });
});

router.put('/community/:community/posts/:post/comments/:comment/upvote', auth, function(req, res, next) {
    req.comment.upvote(function(err, comment){
        if(err) { return next(err); }

        res.json(comment);
    });
});



router.post('/register', function(req, res, next){
    if(!req.body.username || !req.body.password ){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err){
        if(err){
            return next(err);}

        return res.json({token: user.generateJWT()});
    });
});

router.post('/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Todos los campos son obligatorios.'});
    }

    passport.authenticate('local', function(err, user, info){
        if(err){return next(err);}

        if(user){
            return res.json({token: user.generateJWT()});
        }
        else {
            return res.status(401).json(info);
        }

    })(req, res, next);
});

router.delete('/community/:community/posts/:post', auth, function(req, res, next){
    if(req.post.author != req.payload.username) {
        return res.status(401).json({message: 'Solo puede ser borrado por el creador.'});
    }
    Comment.remove({ post: req.post }, function(err) {
        if(err) {
            return next(err);
        }
        req.post.remove(function(err) {
            if(err) {
                return next(err);
            }  
            res.send("Borrado");
        });
    });
});

router.delete('/community/:community/posts/:post/comments/:comment', auth, function(req, res, next){

    if(req.comment.author != req.payload.username) {
        return res.status(401).json({message: 'Solo puede ser borrado por el creador.'});
    }
    //TODO: usar update y $pull ?  
    req.post.comments.splice(req.post.comments.indexOf(req.comment), 1);
    req.post.save(function(err, post){
        if(err) {
            return next(err);
        }

        req.comment.remove(function(err){
            if(err){
                return next(err);
            }
            res.send("Borrado");
        });
    });
});


/*req.post.comments.update({}, {$pull : {"_id" : req.comment._id}});
  req.comment.remove(function(err){
  if(err) {
  return next(err);
  }

  res.send("Borrado");
  });*/

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
