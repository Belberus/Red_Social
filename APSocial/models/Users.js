var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, unique: true },
    hash: String,
    salt: String,
    communities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Community'}]
});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex'); 
};

UserSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

    return hash === this.hash;

};

UserSchema.methods.generateJWT = function(){
    //expiration date to 60 days
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this.id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, 'SECRET');
    //'SECRET' no debe ser hardcodeada, usar variable de entorno, es la firma para los tokens
};
mongoose.model('User', UserSchema);
