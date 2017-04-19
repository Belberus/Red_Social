var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Community = mongoose.model('Community');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var passport = require('passport');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

//TODO: Incluir en todas las rutas de posts el nombre de la comunidad antes.
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

router.get('/posts', function(req, res, next) {
    Post.find(function(err, posts){
        if(err){ return next(err);}

        res.json(posts);
    });
});

router.post('/posts', auth, function(req, res, next) {
    var post = new Post(req.body);
    post.author = req.payload.username;
    post.save(function(err, post){
        if(err){return next(err);}

        res.json(post);
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

router.get('/posts/:post', function(req, res) {
    req.post.populate('comments', function(err, post) {
        if(err) {return next(err); }

        res.json(post);
    });
});

router.put('/posts/:post/addview', function(req, res, next) {
    req.post.addview(function(err, post){
        if(err) { return next(err); }

        res.json(post);
    });
});

router.post('/posts/:post/comments', auth, function(req,res,next) {
    var comment = new Comment(req.body);
    comment.post = req.post;
    comment.author = req.payload.username;
    comment.date = Date.now()
        comment.save(function(err, comment){
            if(err){return next(err); }

            req.post.comments.push(comment);
            //req.post.numcoments += 1;
            req.post.save(function(err, post) {
                if(err){ return next(err); }

                res.json(comment);
            });
        });
});

router.put('/posts/:post/comments/:comment/upvote', auth, function(req, res, next) {
    req.comment.upvote(function(err, comment){
        if(err) { return next(err); }

        res.json(comment);
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

router.post('/register', function(req, res, next){
    if(!req.body.username || !req.body.password ){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err){
        if(err){return next(err);}

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

router.delete('/posts/:post', auth, function(req, res, next){
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

router.delete('/posts/:post/comments/:comment', auth, function(req, res, next){
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
