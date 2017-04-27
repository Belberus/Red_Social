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


var json = {
    "_total": 888,
    "top": [
        {
            "game": {
                "name": "Hearthstone",
                "popularity": 53093,
                "_id": 138585,
                "giantbomb_id": 42033,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-{width}x{height}.jpg"
                }
            },
            "viewers": 53392,
            "channels": 241
        },
        {
            "game": {
                "name": "League of Legends",
                "popularity": 51816,
                "_id": 21779,
                "giantbomb_id": 24024,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-{width}x{height}.jpg"
                }
            },
            "viewers": 52181,
            "channels": 877
        },
        {
            "game": {
                "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
                "popularity": 37918,
                "_id": 493057,
                "giantbomb_id": 54979,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
                }
            },
            "viewers": 37881,
            "channels": 608
        },
        {
            "game": {
                "name": "Dota 2",
                "popularity": 28092,
                "_id": 29595,
                "giantbomb_id": 32887,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-{width}x{height}.jpg"
                }
            },
            "viewers": 27961,
            "channels": 305
        },
        {
            "game": {
                "name": "Overwatch",
                "popularity": 23172,
                "_id": 488552,
                "giantbomb_id": 48190,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Overwatch-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Overwatch-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Overwatch-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Overwatch-{width}x{height}.jpg"
                }
            },
            "viewers": 22887,
            "channels": 636
        },
        {
            "game": {
                "name": "Casino",
                "popularity": 12084,
                "_id": 9234,
                "giantbomb_id": 29666,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Casino-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Casino-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Casino-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Casino-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Casino-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Casino-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Casino-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Casino-{width}x{height}.jpg"
                }
            },
            "viewers": 14057,
            "channels": 15
        },
        {
            "game": {
                "name": "Counter-Strike: Global Offensive",
                "popularity": 11902,
                "_id": 32399,
                "giantbomb_id": 36113,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
                }
            },
            "viewers": 12127,
            "channels": 385
        },
        {
            "game": {
                "name": "Grand Theft Auto V",
                "popularity": 11316,
                "_id": 32982,
                "giantbomb_id": 36765,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Grand%20Theft%20Auto%20V-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Grand%20Theft%20Auto%20V-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Grand%20Theft%20Auto%20V-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Grand%20Theft%20Auto%20V-{width}x{height}.jpg"
                }
            },
            "viewers": 11339,
            "channels": 211
        },
        {
            "game": {
                "name": "World of Warcraft",
                "popularity": 10155,
                "_id": 18122,
                "giantbomb_id": 19783,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warcraft-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warcraft-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warcraft-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warcraft-{width}x{height}.jpg"
                }
            },
            "viewers": 10051,
            "channels": 247
        },
        {
            "game": {
                "name": "Minecraft",
                "popularity": 9301,
                "_id": 27471,
                "giantbomb_id": 30475,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Minecraft-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Minecraft-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Minecraft-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Minecraft-{width}x{height}.jpg"
                }
            },
            "viewers": 9316,
            "channels": 202
        },
        {
            "game": {
                "name": "IRL",
                "popularity": 7472,
                "_id": 494717,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-{width}x{height}.jpg"
                }
            },
            "viewers": 7473,
            "channels": 98
        },
        {
            "game": {
                "name": "Talk Shows",
                "popularity": 7247,
                "_id": 417752,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-{width}x{height}.jpg"
                }
            },
            "viewers": 7393,
            "channels": 47
        },
        {
            "game": {
                "name": "Dark Souls III",
                "popularity": 6767,
                "_id": 490292,
                "giantbomb_id": 49884,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Souls%20III-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Souls%20III-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Souls%20III-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Souls%20III-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Souls%20III-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Souls%20III-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Souls%20III-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Souls%20III-{width}x{height}.jpg"
                }
            },
            "viewers": 6783,
            "channels": 113
        },
        {
            "game": {
                "name": "H1Z1: King of the Kill",
                "popularity": 4985,
                "_id": 417892,
                "giantbomb_id": 52692,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1:%20King%20of%20the%20Kill-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1:%20King%20of%20the%20Kill-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1:%20King%20of%20the%20Kill-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1:%20King%20of%20the%20Kill-{width}x{height}.jpg"
                }
            },
            "viewers": 4948,
            "channels": 239
        },
        {
            "game": {
                "name": "Heroes of the Storm",
                "popularity": 4354,
                "_id": 32959,
                "giantbomb_id": 36739,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20the%20Storm-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20the%20Storm-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20the%20Storm-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20the%20Storm-{width}x{height}.jpg"
                }
            },
            "viewers": 4360,
            "channels": 94
        },
        {
            "game": {
                "name": "RuneScape",
                "popularity": 4138,
                "_id": 2083,
                "giantbomb_id": 2268,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/RuneScape-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/RuneScape-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/RuneScape-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/RuneScape-{width}x{height}.jpg"
                }
            },
            "viewers": 4172,
            "channels": 79
        },
        {
            "game": {
                "name": "StarCraft II",
                "popularity": 3586,
                "_id": 490422,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-{width}x{height}.jpg"
                }
            },
            "viewers": 3708,
            "channels": 52
        },
        {
            "game": {
                "name": "Destiny",
                "popularity": 3539,
                "_id": 280721,
                "giantbomb_id": 36067,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Destiny-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Destiny-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Destiny-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Destiny-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Destiny-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Destiny-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Destiny-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Destiny-{width}x{height}.jpg"
                }
            },
            "viewers": 3578,
            "channels": 387
        },
        {
            "game": {
                "name": "Poker",
                "popularity": 3222,
                "_id": 488190,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Poker-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Poker-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Poker-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Poker-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Poker-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Poker-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Poker-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Poker-{width}x{height}.jpg"
                }
            },
            "viewers": 3339,
            "channels": 30
        },
        {
            "game": {
                "name": "World of Tanks",
                "popularity": 3257,
                "_id": 27546,
                "giantbomb_id": 30567,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Tanks-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Tanks-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Tanks-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Tanks-{width}x{height}.jpg"
                }
            },
            "viewers": 3224,
            "channels": 126
        },
        {
            "game": {
                "name": "Tom Clancy's Rainbow Six: Siege",
                "popularity": 2863,
                "_id": 460630,
                "giantbomb_id": 46562,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-{width}x{height}.jpg"
                }
            },
            "viewers": 2865,
            "channels": 196
        },
        {
            "game": {
                "name": "Call of Duty: Black Ops II",
                "popularity": 2813,
                "_id": 34134,
                "giantbomb_id": 38039,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20II-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20II-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20II-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20II-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20II-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20II-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20II-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20II-{width}x{height}.jpg"
                }
            },
            "viewers": 2780,
            "channels": 47
        },
        {
            "game": {
                "name": "Welcome to the Game",
                "popularity": 2707,
                "_id": 493096,
                "giantbomb_id": 54696,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Welcome%20to%20the%20Game-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Welcome%20to%20the%20Game-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Welcome%20to%20the%20Game-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Welcome%20to%20the%20Game-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Welcome%20to%20the%20Game-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Welcome%20to%20the%20Game-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Welcome%20to%20the%20Game-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Welcome%20to%20the%20Game-{width}x{height}.jpg"
                }
            },
            "viewers": 2731,
            "channels": 5
        },
        {
            "game": {
                "name": "Persona 5",
                "popularity": 2668,
                "_id": 27473,
                "giantbomb_id": 30486,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Persona%205-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Persona%205-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Persona%205-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Persona%205-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Persona%205-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Persona%205-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Persona%205-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Persona%205-{width}x{height}.jpg"
                }
            },
            "viewers": 2650,
            "channels": 41
        },
        {
            "game": {
                "name": "StarCraft: Brood War",
                "popularity": 2626,
                "_id": 4967,
                "giantbomb_id": 5415,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft:%20Brood%20War-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft:%20Brood%20War-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft:%20Brood%20War-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft:%20Brood%20War-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft:%20Brood%20War-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft:%20Brood%20War-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft:%20Brood%20War-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/StarCraft:%20Brood%20War-{width}x{height}.jpg"
                }
            },
            "viewers": 2638,
            "channels": 21
        },
        {
            "game": {
                "name": "Path of Exile",
                "popularity": 2399,
                "_id": 29307,
                "giantbomb_id": 32562,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Path%20of%20Exile-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Path%20of%20Exile-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Path%20of%20Exile-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Path%20of%20Exile-{width}x{height}.jpg"
                }
            },
            "viewers": 2423,
            "channels": 95
        },
        {
            "game": {
                "name": "Creative",
                "popularity": 2353,
                "_id": 488191,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Creative-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Creative-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Creative-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Creative-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Creative-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Creative-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Creative-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Creative-{width}x{height}.jpg"
                }
            },
            "viewers": 2390,
            "channels": 158
        },
        {
            "game": {
                "name": "Lineage II: The Chaotic Chronicle",
                "popularity": 2369,
                "_id": 8901,
                "giantbomb_id": 9705,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Lineage%20II:%20The%20Chaotic%20Chronicle-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Lineage%20II:%20The%20Chaotic%20Chronicle-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Lineage%20II:%20The%20Chaotic%20Chronicle-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Lineage%20II:%20The%20Chaotic%20Chronicle-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Lineage%20II:%20The%20Chaotic%20Chronicle-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Lineage%20II:%20The%20Chaotic%20Chronicle-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Lineage%20II:%20The%20Chaotic%20Chronicle-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Lineage%20II:%20The%20Chaotic%20Chronicle-{width}x{height}.jpg"
                }
            },
            "viewers": 2368,
            "channels": 28
        },
        {
            "game": {
                "name": "Bayonetta",
                "popularity": 2107,
                "_id": 18933,
                "giantbomb_id": 20710,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Bayonetta-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Bayonetta-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Bayonetta-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Bayonetta-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Bayonetta-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Bayonetta-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Bayonetta-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Bayonetta-{width}x{height}.jpg"
                }
            },
            "viewers": 2111,
            "channels": 9
        },
        {
            "game": {
                "name": "Diablo III: Reaper of Souls",
                "popularity": 1669,
                "_id": 313558,
                "giantbomb_id": 43649,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20III:%20Reaper%20of%20Souls-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20III:%20Reaper%20of%20Souls-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20III:%20Reaper%20of%20Souls-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20III:%20Reaper%20of%20Souls-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Diablo%20III:%20Reaper%20of%20Souls-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Diablo%20III:%20Reaper%20of%20Souls-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Diablo%20III:%20Reaper%20of%20Souls-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Diablo%20III:%20Reaper%20of%20Souls-{width}x{height}.jpg"
                }
            },
            "viewers": 1740,
            "channels": 112
        },
        {
            "game": {
                "name": "Call of Duty: Infinite Warfare",
                "popularity": 1723,
                "_id": 491437,
                "giantbomb_id": 52633,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Infinite%20Warfare-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Infinite%20Warfare-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Infinite%20Warfare-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Infinite%20Warfare-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Infinite%20Warfare-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Infinite%20Warfare-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Infinite%20Warfare-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Infinite%20Warfare-{width}x{height}.jpg"
                }
            },
            "viewers": 1686,
            "channels": 97
        },
        {
            "game": {
                "name": "NBA 2K17",
                "popularity": 1653,
                "_id": 493112,
                "giantbomb_id": 55380,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K17-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K17-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K17-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K17-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K17-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K17-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K17-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K17-{width}x{height}.jpg"
                }
            },
            "viewers": 1631,
            "channels": 71
        },
        {
            "game": {
                "name": "Black Desert Online",
                "popularity": 1546,
                "_id": 386821,
                "giantbomb_id": 44025,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert%20Online-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert%20Online-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert%20Online-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert%20Online-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Black%20Desert%20Online-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Black%20Desert%20Online-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Black%20Desert%20Online-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Black%20Desert%20Online-{width}x{height}.jpg"
                }
            },
            "viewers": 1577,
            "channels": 44
        },
        {
            "game": {
                "name": "The Sims 4",
                "popularity": 1523,
                "_id": 369252,
                "giantbomb_id": 42574,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Sims%204-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Sims%204-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Sims%204-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Sims%204-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Sims%204-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Sims%204-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Sims%204-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Sims%204-{width}x{height}.jpg"
                }
            },
            "viewers": 1524,
            "channels": 12
        },
        {
            "game": {
                "name": "FIFA 17",
                "popularity": 1221,
                "_id": 493091,
                "giantbomb_id": 54134,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2017-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2017-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2017-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2017-{width}x{height}.jpg"
                }
            },
            "viewers": 1363,
            "channels": 90
        },
        {
            "game": {
                "name": "NBA 2K16",
                "popularity": 1240,
                "_id": 489812,
                "giantbomb_id": 49866,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K16-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K16-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K16-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K16-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K16-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K16-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K16-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/NBA%202K16-{width}x{height}.jpg"
                }
            },
            "viewers": 1247,
            "channels": 9
        },
        {
            "game": {
                "name": "Gartic",
                "popularity": 1214,
                "_id": 496661,
                "giantbomb_id": 59167,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Gartic-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Gartic-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Gartic-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Gartic-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Gartic-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Gartic-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Gartic-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Gartic-{width}x{height}.jpg"
                }
            },
            "viewers": 1204,
            "channels": 1
        },
        {
            "game": {
                "name": "Super Mario Maker",
                "popularity": 1149,
                "_id": 490608,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Maker-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Maker-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Maker-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Maker-{width}x{height}.jpg"
                }
            },
            "viewers": 1159,
            "channels": 7
        },
        {
            "game": {
                "name": "Late Shift",
                "popularity": 1163,
                "_id": 495582,
                "giantbomb_id": 58185,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Late%20Shift-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Late%20Shift-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Late%20Shift-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Late%20Shift-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Late%20Shift-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Late%20Shift-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Late%20Shift-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Late%20Shift-{width}x{height}.jpg"
                }
            },
            "viewers": 1157,
            "channels": 2
        },
        {
            "game": {
                "name": "Arma 3",
                "popularity": 1121,
                "_id": 31750,
                "giantbomb_id": 35383,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Arma%203-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Arma%203-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Arma%203-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Arma%203-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Arma%203-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Arma%203-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Arma%203-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Arma%203-{width}x{height}.jpg"
                }
            },
            "viewers": 1136,
            "channels": 45
        },
        {
            "game": {
                "name": "Age of Empires",
                "popularity": 1043,
                "_id": 9623,
                "giantbomb_id": 10485,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Age%20of%20Empires-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Age%20of%20Empires-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Age%20of%20Empires-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Age%20of%20Empires-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Age%20of%20Empires-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Age%20of%20Empires-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Age%20of%20Empires-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Age%20of%20Empires-{width}x{height}.jpg"
                }
            },
            "viewers": 1041,
            "channels": 2
        },
        {
            "game": {
                "name": "FTL: Faster Than Light",
                "popularity": 1044,
                "_id": 33882,
                "giantbomb_id": 37770,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/FTL:%20Faster%20Than%20Light-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/FTL:%20Faster%20Than%20Light-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/FTL:%20Faster%20Than%20Light-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/FTL:%20Faster%20Than%20Light-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/FTL:%20Faster%20Than%20Light-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/FTL:%20Faster%20Than%20Light-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/FTL:%20Faster%20Than%20Light-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/FTL:%20Faster%20Than%20Light-{width}x{height}.jpg"
                }
            },
            "viewers": 1040,
            "channels": 4
        },
        {
            "game": {
                "name": "Smite",
                "popularity": 957,
                "_id": 32507,
                "giantbomb_id": 36241,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Smite-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Smite-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Smite-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Smite-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Smite-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Smite-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Smite-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Smite-{width}x{height}.jpg"
                }
            },
            "viewers": 967,
            "channels": 69
        },
        {
            "game": {
                "name": "Dead by Daylight",
                "popularity": 941,
                "_id": 491487,
                "giantbomb_id": 52693,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20by%20Daylight-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20by%20Daylight-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20by%20Daylight-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20by%20Daylight-{width}x{height}.jpg"
                }
            },
            "viewers": 955,
            "channels": 63
        },
        {
            "game": {
                "name": "Metal Gear Rising: Revengeance",
                "popularity": 893,
                "_id": 24208,
                "giantbomb_id": 26801,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Metal%20Gear%20Rising:%20Revengeance-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Metal%20Gear%20Rising:%20Revengeance-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Metal%20Gear%20Rising:%20Revengeance-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Metal%20Gear%20Rising:%20Revengeance-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Metal%20Gear%20Rising:%20Revengeance-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Metal%20Gear%20Rising:%20Revengeance-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Metal%20Gear%20Rising:%20Revengeance-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Metal%20Gear%20Rising:%20Revengeance-{width}x{height}.jpg"
                }
            },
            "viewers": 903,
            "channels": 1
        },
        {
            "game": {
                "name": "Music",
                "popularity": 856,
                "_id": 26936,
                "giantbomb_id": 29887,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Music-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Music-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Music-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Music-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Music-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Music-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Music-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Music-{width}x{height}.jpg"
                }
            },
            "viewers": 848,
            "channels": 32
        },
        {
            "game": {
                "name": "Yakuza 0",
                "popularity": 863,
                "_id": 476269,
                "giantbomb_id": 47551,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Yakuza%200-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Yakuza%200-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Yakuza%200-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Yakuza%200-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Yakuza%200-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Yakuza%200-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Yakuza%200-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Yakuza%200-{width}x{height}.jpg"
                }
            },
            "viewers": 836,
            "channels": 5
        },
        {
            "game": {
                "name": "Rocket League",
                "popularity": 821,
                "_id": 30921,
                "giantbomb_id": 34407,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Rocket%20League-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Rocket%20League-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Rocket%20League-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Rocket%20League-{width}x{height}.jpg"
                }
            },
            "viewers": 784,
            "channels": 73
        },
        {
            "game": {
                "name": "Doom",
                "popularity": 733,
                "_id": 6715,
                "giantbomb_id": 7326,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Doom-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Doom-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Doom-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Doom-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Doom-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Doom-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Doom-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Doom-{width}x{height}.jpg"
                }
            },
            "viewers": 734,
            "channels": 5
        },
        {
            "game": {
                "name": "The Legend of Zelda: Breath of the Wild",
                "popularity": 715,
                "_id": 110758,
                "giantbomb_id": 41355,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-{width}x{height}.jpg"
                }
            },
            "viewers": 712,
            "channels": 43
        },
        {
            "game": {
                "name": "Street Fighter V",
                "popularity": 698,
                "_id": 488615,
                "giantbomb_id": 48320,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Street%20Fighter%20V-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Street%20Fighter%20V-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Street%20Fighter%20V-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Street%20Fighter%20V-{width}x{height}.jpg"
                }
            },
            "viewers": 701,
            "channels": 18
        },
        {
            "game": {
                "name": "osu!",
                "popularity": 684,
                "_id": 21465,
                "giantbomb_id": 23676,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/osu%21-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/osu%21-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/osu%21-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/osu%21-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/osu%21-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/osu%21-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/osu%21-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/osu%21-{width}x{height}.jpg"
                }
            },
            "viewers": 661,
            "channels": 52
        },
        {
            "game": {
                "name": "Warcraft III: The Frozen Throne",
                "popularity": 601,
                "_id": 12924,
                "giantbomb_id": 14073,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Warcraft%20III:%20The%20Frozen%20Throne-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Warcraft%20III:%20The%20Frozen%20Throne-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Warcraft%20III:%20The%20Frozen%20Throne-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Warcraft%20III:%20The%20Frozen%20Throne-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Warcraft%20III:%20The%20Frozen%20Throne-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Warcraft%20III:%20The%20Frozen%20Throne-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Warcraft%20III:%20The%20Frozen%20Throne-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Warcraft%20III:%20The%20Frozen%20Throne-{width}x{height}.jpg"
                }
            },
            "viewers": 611,
            "channels": 20
        },
        {
            "game": {
                "name": "The Escapists",
                "popularity": 596,
                "_id": 418072,
                "giantbomb_id": 46491,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Escapists-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Escapists-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Escapists-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Escapists-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Escapists-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Escapists-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Escapists-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Escapists-{width}x{height}.jpg"
                }
            },
            "viewers": 596,
            "channels": 2
        },
        {
            "game": {
                "name": "Planet Coaster",
                "popularity": 554,
                "_id": 490384,
                "giantbomb_id": 50018,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Planet%20Coaster-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Planet%20Coaster-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Planet%20Coaster-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Planet%20Coaster-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Planet%20Coaster-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Planet%20Coaster-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Planet%20Coaster-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Planet%20Coaster-{width}x{height}.jpg"
                }
            },
            "viewers": 564,
            "channels": 8
        },
        {
            "game": {
                "name": "ARK",
                "popularity": 559,
                "_id": 489635,
                "giantbomb_id": 49642,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/ARK-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/ARK-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/ARK-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/ARK-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/ARK-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/ARK-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/ARK-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/ARK-{width}x{height}.jpg"
                }
            },
            "viewers": 557,
            "channels": 61
        },
        {
            "game": {
                "name": "Shadowverse",
                "popularity": 548,
                "_id": 492925,
                "giantbomb_id": 54061,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Shadowverse-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Shadowverse-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Shadowverse-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Shadowverse-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Shadowverse-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Shadowverse-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Shadowverse-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Shadowverse-{width}x{height}.jpg"
                }
            },
            "viewers": 537,
            "channels": 17
        },
        {
            "game": {
                "name": "Tibia",
                "popularity": 472,
                "_id": 19619,
                "giantbomb_id": 21545,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Tibia-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Tibia-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Tibia-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Tibia-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Tibia-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Tibia-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Tibia-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Tibia-{width}x{height}.jpg"
                }
            },
            "viewers": 480,
            "channels": 22
        },
        {
            "game": {
                "name": "Yooka-Laylee",
                "popularity": 460,
                "_id": 489591,
                "giantbomb_id": 49158,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Yooka-Laylee-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Yooka-Laylee-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Yooka-Laylee-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Yooka-Laylee-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Yooka-Laylee-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Yooka-Laylee-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Yooka-Laylee-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Yooka-Laylee-{width}x{height}.jpg"
                }
            },
            "viewers": 471,
            "channels": 20
        },
        {
            "game": {
                "name": "Clash Royale",
                "popularity": 499,
                "_id": 491168,
                "giantbomb_id": 52342,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Clash%20Royale-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Clash%20Royale-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Clash%20Royale-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Clash%20Royale-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Clash%20Royale-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Clash%20Royale-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Clash%20Royale-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Clash%20Royale-{width}x{height}.jpg"
                }
            },
            "viewers": 448,
            "channels": 29
        },
        {
            "game": {
                "name": "The Last of Us",
                "popularity": 450,
                "_id": 33180,
                "giantbomb_id": 36989,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Last%20of%20Us-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Last%20of%20Us-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Last%20of%20Us-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Last%20of%20Us-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Last%20of%20Us-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Last%20of%20Us-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Last%20of%20Us-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Last%20of%20Us-{width}x{height}.jpg"
                }
            },
            "viewers": 444,
            "channels": 18
        },
        {
            "game": {
                "name": "For Honor",
                "popularity": 427,
                "_id": 490382,
                "giantbomb_id": 49967,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/For%20Honor-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/For%20Honor-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/For%20Honor-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/For%20Honor-{width}x{height}.jpg"
                }
            },
            "viewers": 440,
            "channels": 33
        },
        {
            "game": {
                "name": "Castlevania: Aria of Sorrow",
                "popularity": 430,
                "_id": 11065,
                "giantbomb_id": 12036,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Aria%20of%20Sorrow-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Aria%20of%20Sorrow-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Aria%20of%20Sorrow-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Aria%20of%20Sorrow-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Castlevania:%20Aria%20of%20Sorrow-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Castlevania:%20Aria%20of%20Sorrow-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Castlevania:%20Aria%20of%20Sorrow-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Castlevania:%20Aria%20of%20Sorrow-{width}x{height}.jpg"
                }
            },
            "viewers": 429,
            "channels": 2
        },
        {
            "game": {
                "name": "Summoners War: Sky Arena",
                "popularity": 412,
                "_id": 489111,
                "giantbomb_id": 49061,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Summoners%20War:%20Sky%20Arena-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Summoners%20War:%20Sky%20Arena-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Summoners%20War:%20Sky%20Arena-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Summoners%20War:%20Sky%20Arena-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Summoners%20War:%20Sky%20Arena-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Summoners%20War:%20Sky%20Arena-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Summoners%20War:%20Sky%20Arena-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Summoners%20War:%20Sky%20Arena-{width}x{height}.jpg"
                }
            },
            "viewers": 420,
            "channels": 14
        },
        {
            "game": {
                "name": "Tom Clancy's The Division",
                "popularity": 434,
                "_id": 369579,
                "giantbomb_id": 42918,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20The%20Division-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20The%20Division-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20The%20Division-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20The%20Division-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20The%20Division-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20The%20Division-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20The%20Division-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Tom%20Clancy%27s%20The%20Division-{width}x{height}.jpg"
                }
            },
            "viewers": 420,
            "channels": 52
        },
        {
            "game": {
                "name": "Blade and Soul",
                "popularity": 389,
                "_id": 20423,
                "giantbomb_id": 22516,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Blade%20and%20Soul-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Blade%20and%20Soul-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Blade%20and%20Soul-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Blade%20and%20Soul-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Blade%20and%20Soul-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Blade%20and%20Soul-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Blade%20and%20Soul-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Blade%20and%20Soul-{width}x{height}.jpg"
                }
            },
            "viewers": 413,
            "channels": 35
        },
        {
            "game": {
                "name": "Call of Duty: Black Ops III",
                "popularity": 435,
                "_id": 489401,
                "giantbomb_id": 48754,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20III-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20III-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20III-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20III-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20III-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20III-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20III-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Call%20of%20Duty:%20Black%20Ops%20III-{width}x{height}.jpg"
                }
            },
            "viewers": 412,
            "channels": 112
        },
        {
            "game": {
                "name": "Phantasmagoria: A Puzzle of Flesh",
                "popularity": 404,
                "_id": 9328,
                "giantbomb_id": 10169,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Phantasmagoria:%20A%20Puzzle%20of%20Flesh-{width}x{height}.jpg"
                }
            },
            "viewers": 397,
            "channels": 1
        },
        {
            "game": {
                "name": "MLB The Show 17",
                "popularity": 481,
                "_id": 494100,
                "giantbomb_id": 56835,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/MLB%20The%20Show%2017-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/MLB%20The%20Show%2017-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/MLB%20The%20Show%2017-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/MLB%20The%20Show%2017-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/MLB%20The%20Show%2017-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/MLB%20The%20Show%2017-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/MLB%20The%20Show%2017-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/MLB%20The%20Show%2017-{width}x{height}.jpg"
                }
            },
            "viewers": 395,
            "channels": 10
        },
        {
            "game": {
                "name": "Fate/Grand Order",
                "popularity": 393,
                "_id": 493048,
                "giantbomb_id": 51422,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Fate/Grand%20Order-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Fate/Grand%20Order-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Fate/Grand%20Order-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Fate/Grand%20Order-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Fate/Grand%20Order-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Fate/Grand%20Order-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Fate/Grand%20Order-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Fate/Grand%20Order-{width}x{height}.jpg"
                }
            },
            "viewers": 394,
            "channels": 2
        },
        {
            "game": {
                "name": "Final Fantasy XIV: Heavensward",
                "popularity": 352,
                "_id": 488994,
                "giantbomb_id": 48901,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20XIV:%20Heavensward-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20XIV:%20Heavensward-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20XIV:%20Heavensward-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20XIV:%20Heavensward-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Final%20Fantasy%20XIV:%20Heavensward-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Final%20Fantasy%20XIV:%20Heavensward-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Final%20Fantasy%20XIV:%20Heavensward-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Final%20Fantasy%20XIV:%20Heavensward-{width}x{height}.jpg"
                }
            },
            "viewers": 360,
            "channels": 26
        },
        {
            "game": {
                "name": "The Elder Scrolls V: Skyrim",
                "popularity": 352,
                "_id": 30028,
                "giantbomb_id": 33394,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20V:%20Skyrim-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20V:%20Skyrim-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20V:%20Skyrim-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20V:%20Skyrim-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20V:%20Skyrim-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20V:%20Skyrim-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20V:%20Skyrim-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20V:%20Skyrim-{width}x{height}.jpg"
                }
            },
            "viewers": 352,
            "channels": 39
        },
        {
            "game": {
                "name": "Dead Rising 4",
                "popularity": 373,
                "_id": 493389,
                "giantbomb_id": 54133,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20Rising%204-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20Rising%204-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20Rising%204-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20Rising%204-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20Rising%204-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20Rising%204-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20Rising%204-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dead%20Rising%204-{width}x{height}.jpg"
                }
            },
            "viewers": 343,
            "channels": 3
        },
        {
            "game": {
                "name": "Pokémon Sun/Moon",
                "popularity": 360,
                "_id": 491599,
                "giantbomb_id": 52769,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Pok%C3%A9mon%20Sun/Moon-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Pok%C3%A9mon%20Sun/Moon-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Pok%C3%A9mon%20Sun/Moon-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Pok%C3%A9mon%20Sun/Moon-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Pok%C3%A9mon%20Sun/Moon-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Pok%C3%A9mon%20Sun/Moon-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Pok%C3%A9mon%20Sun/Moon-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Pok%C3%A9mon%20Sun/Moon-{width}x{height}.jpg"
                }
            },
            "viewers": 342,
            "channels": 16
        },
        {
            "game": {
                "name": "World of Warships",
                "popularity": 323,
                "_id": 32502,
                "giantbomb_id": 36235,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warships-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warships-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warships-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warships-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warships-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warships-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warships-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/World%20of%20Warships-{width}x{height}.jpg"
                }
            },
            "viewers": 334,
            "channels": 29
        },
        {
            "game": {
                "name": "Gwent: The Witcher Card Game",
                "popularity": 338,
                "_id": 493217,
                "giantbomb_id": 54166,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Gwent:%20The%20Witcher%20Card%20Game-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Gwent:%20The%20Witcher%20Card%20Game-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Gwent:%20The%20Witcher%20Card%20Game-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Gwent:%20The%20Witcher%20Card%20Game-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Gwent:%20The%20Witcher%20Card%20Game-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Gwent:%20The%20Witcher%20Card%20Game-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Gwent:%20The%20Witcher%20Card%20Game-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Gwent:%20The%20Witcher%20Card%20Game-{width}x{height}.jpg"
                }
            },
            "viewers": 331,
            "channels": 9
        },
        {
            "game": {
                "name": "Dark Cloud",
                "popularity": 326,
                "_id": 1705,
                "giantbomb_id": 1861,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Cloud-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Cloud-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Cloud-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Cloud-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Cloud-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Cloud-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Cloud-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dark%20Cloud-{width}x{height}.jpg"
                }
            },
            "viewers": 328,
            "channels": 1
        },
        {
            "game": {
                "name": "Guild Wars 2",
                "popularity": 318,
                "_id": 19357,
                "giantbomb_id": 21223,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Guild%20Wars%202-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Guild%20Wars%202-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Guild%20Wars%202-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Guild%20Wars%202-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Guild%20Wars%202-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Guild%20Wars%202-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Guild%20Wars%202-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Guild%20Wars%202-{width}x{height}.jpg"
                }
            },
            "viewers": 319,
            "channels": 23
        },
        {
            "game": {
                "name": "Paragon",
                "popularity": 302,
                "_id": 25939,
                "giantbomb_id": 51414,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Paragon-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Paragon-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Paragon-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Paragon-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Paragon-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Paragon-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Paragon-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Paragon-{width}x{height}.jpg"
                }
            },
            "viewers": 314,
            "channels": 49
        },
        {
            "game": {
                "name": "Fatal Frame II: Crimson Butterfly",
                "popularity": 313,
                "_id": 8483,
                "giantbomb_id": 9255,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Fatal%20Frame%20II:%20Crimson%20Butterfly-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Fatal%20Frame%20II:%20Crimson%20Butterfly-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Fatal%20Frame%20II:%20Crimson%20Butterfly-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Fatal%20Frame%20II:%20Crimson%20Butterfly-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Fatal%20Frame%20II:%20Crimson%20Butterfly-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Fatal%20Frame%20II:%20Crimson%20Butterfly-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Fatal%20Frame%20II:%20Crimson%20Butterfly-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Fatal%20Frame%20II:%20Crimson%20Butterfly-{width}x{height}.jpg"
                }
            },
            "viewers": 304,
            "channels": 1
        },
        {
            "game": {
                "name": "Madden NFL 17",
                "popularity": 298,
                "_id": 493021,
                "giantbomb_id": 54062,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Madden%20NFL%2017-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Madden%20NFL%2017-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Madden%20NFL%2017-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Madden%20NFL%2017-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Madden%20NFL%2017-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Madden%20NFL%2017-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Madden%20NFL%2017-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Madden%20NFL%2017-{width}x{height}.jpg"
                }
            },
            "viewers": 302,
            "channels": 32
        },
        {
            "game": {
                "name": "Super Mario Galaxy 2",
                "popularity": 305,
                "_id": 24239,
                "giantbomb_id": 26839,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Galaxy%202-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Galaxy%202-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Galaxy%202-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Galaxy%202-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Galaxy%202-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Galaxy%202-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Galaxy%202-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Super%20Mario%20Galaxy%202-{width}x{height}.jpg"
                }
            },
            "viewers": 301,
            "channels": 1
        },
        {
            "game": {
                "name": "M.U.G.E.N",
                "popularity": 299,
                "_id": 271231,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/M.U.G.E.N-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/M.U.G.E.N-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/M.U.G.E.N-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/M.U.G.E.N-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/M.U.G.E.N-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/M.U.G.E.N-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/M.U.G.E.N-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/M.U.G.E.N-{width}x{height}.jpg"
                }
            },
            "viewers": 296,
            "channels": 2
        },
        {
            "game": {
                "name": "The Legend of Zelda: A Link to the Past",
                "popularity": 290,
                "_id": 9435,
                "giantbomb_id": 10276,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20A%20Link%20to%20the%20Past-{width}x{height}.jpg"
                }
            },
            "viewers": 286,
            "channels": 8
        },
        {
            "game": {
                "name": "The Legend of Zelda: Skyward Sword",
                "popularity": 280,
                "_id": 24324,
                "giantbomb_id": 26934,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Legend%20of%20Zelda:%20Skyward%20Sword-{width}x{height}.jpg"
                }
            },
            "viewers": 279,
            "channels": 2
        },
        {
            "game": {
                "name": "Trials Fusion",
                "popularity": 254,
                "_id": 369577,
                "giantbomb_id": 42915,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Trials%20Fusion-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Trials%20Fusion-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Trials%20Fusion-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Trials%20Fusion-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Trials%20Fusion-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Trials%20Fusion-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Trials%20Fusion-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Trials%20Fusion-{width}x{height}.jpg"
                }
            },
            "viewers": 260,
            "channels": 6
        },
        {
            "game": {
                "name": "Battlefield 1",
                "popularity": 272,
                "_id": 488500,
                "giantbomb_id": 48113,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Battlefield%201-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Battlefield%201-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Battlefield%201-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Battlefield%201-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Battlefield%201-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Battlefield%201-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Battlefield%201-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Battlefield%201-{width}x{height}.jpg"
                }
            },
            "viewers": 259,
            "channels": 81
        },
        {
            "game": {
                "name": "Prime World",
                "popularity": 255,
                "_id": 113749,
                "giantbomb_id": 41436,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Prime%20World-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Prime%20World-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Prime%20World-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Prime%20World-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Prime%20World-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Prime%20World-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Prime%20World-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Prime%20World-{width}x{height}.jpg"
                }
            },
            "viewers": 258,
            "channels": 7
        },
        {
            "game": {
                "name": "Warframe",
                "popularity": 250,
                "_id": 66170,
                "giantbomb_id": 38788,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-{width}x{height}.jpg"
                }
            },
            "viewers": 251,
            "channels": 67
        },
        {
            "game": {
                "name": "Halo 5: Guardians",
                "popularity": 244,
                "_id": 369567,
                "giantbomb_id": 42905,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Halo%205:%20Guardians-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Halo%205:%20Guardians-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Halo%205:%20Guardians-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Halo%205:%20Guardians-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Halo%205:%20Guardians-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Halo%205:%20Guardians-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Halo%205:%20Guardians-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Halo%205:%20Guardians-{width}x{height}.jpg"
                }
            },
            "viewers": 251,
            "channels": 23
        },
        {
            "game": {
                "name": "Rust",
                "popularity": 250,
                "_id": 263490,
                "giantbomb_id": 42984,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Rust-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Rust-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Rust-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Rust-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Rust-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Rust-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Rust-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Rust-{width}x{height}.jpg"
                }
            },
            "viewers": 246,
            "channels": 40
        },
        {
            "game": {
                "name": "The Disney Afternoon Collection",
                "popularity": 240,
                "_id": 496206,
                "giantbomb_id": 58745,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Disney%20Afternoon%20Collection-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Disney%20Afternoon%20Collection-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Disney%20Afternoon%20Collection-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Disney%20Afternoon%20Collection-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Disney%20Afternoon%20Collection-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Disney%20Afternoon%20Collection-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Disney%20Afternoon%20Collection-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Disney%20Afternoon%20Collection-{width}x{height}.jpg"
                }
            },
            "viewers": 241,
            "channels": 3
        },
        {
            "game": {
                "name": "Skyforge",
                "popularity": 215,
                "_id": 461326,
                "giantbomb_id": 47278,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Skyforge-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Skyforge-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Skyforge-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Skyforge-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Skyforge-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Skyforge-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Skyforge-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Skyforge-{width}x{height}.jpg"
                }
            },
            "viewers": 221,
            "channels": 41
        },
        {
            "game": {
                "name": "Escape From Tarkov",
                "popularity": 215,
                "_id": 491931,
                "giantbomb_id": 53106,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Escape%20From%20Tarkov-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Escape%20From%20Tarkov-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Escape%20From%20Tarkov-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Escape%20From%20Tarkov-{width}x{height}.jpg"
                }
            },
            "viewers": 220,
            "channels": 12
        },
        {
            "game": {
                "name": "Heroes of Might and Magic III: The Shadow of Death",
                "popularity": 209,
                "_id": 2798,
                "giantbomb_id": 3051,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Heroes%20of%20Might%20and%20Magic%20III:%20The%20Shadow%20of%20Death-{width}x{height}.jpg"
                }
            },
            "viewers": 214,
            "channels": 2
        },
        {
            "game": {
                "name": "The Elder Scrolls Online",
                "popularity": 199,
                "_id": 65654,
                "giantbomb_id": 38206,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20Online-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20Online-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20Online-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Elder%20Scrolls%20Online-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20Online-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20Online-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20Online-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Elder%20Scrolls%20Online-{width}x{height}.jpg"
                }
            },
            "viewers": 210,
            "channels": 26
        },
        {
            "game": {
                "name": "Retro",
                "popularity": 208,
                "_id": 27284,
                "giantbomb_id": 30276,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Retro-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Retro-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Retro-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Retro-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Retro-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Retro-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Retro-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Retro-{width}x{height}.jpg"
                }
            },
            "viewers": 207,
            "channels": 21
        },
        {
            "game": {
                "name": "The Binding of Isaac: Afterbirth",
                "popularity": 207,
                "_id": 491080,
                "giantbomb_id": 0,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Binding%20of%20Isaac:%20Afterbirth-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Binding%20of%20Isaac:%20Afterbirth-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Binding%20of%20Isaac:%20Afterbirth-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/The%20Binding%20of%20Isaac:%20Afterbirth-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Binding%20of%20Isaac:%20Afterbirth-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Binding%20of%20Isaac:%20Afterbirth-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Binding%20of%20Isaac:%20Afterbirth-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/The%20Binding%20of%20Isaac:%20Afterbirth-{width}x{height}.jpg"
                }
            },
            "viewers": 205,
            "channels": 16
        },
        {
            "game": {
                "name": "Stardew Valley",
                "popularity": 207,
                "_id": 490744,
                "giantbomb_id": 50899,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Stardew%20Valley-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Stardew%20Valley-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Stardew%20Valley-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Stardew%20Valley-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Stardew%20Valley-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Stardew%20Valley-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Stardew%20Valley-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Stardew%20Valley-{width}x{height}.jpg"
                }
            },
            "viewers": 201,
            "channels": 17
        },
        {
            "game": {
                "name": "Battle Brothers",
                "popularity": 189,
                "_id": 490771,
                "giantbomb_id": 50269,
                "box": {
                    "large": "https://static-cdn.jtvnw.net/ttv-boxart/Battle%20Brothers-272x380.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Battle%20Brothers-136x190.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-boxart/Battle%20Brothers-52x72.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-boxart/Battle%20Brothers-{width}x{height}.jpg"
                },
                "logo": {
                    "large": "https://static-cdn.jtvnw.net/ttv-logoart/Battle%20Brothers-240x144.jpg",
                    "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Battle%20Brothers-120x72.jpg",
                    "small": "https://static-cdn.jtvnw.net/ttv-logoart/Battle%20Brothers-60x36.jpg",
                    "template": "https://static-cdn.jtvnw.net/ttv-logoart/Battle%20Brothers-{width}x{height}.jpg"
                }
            },
            "viewers": 198,
            "channels": 2
        }
    ]
};

router.get('/add', function(){
    var com;
    for (i = 0; i < json["_total"]; i++) {
        com = new Community();
        console.log(json.top[i].game.name);
        console.log(json.top[i].game.box.large);

        com.name = json.top[i].game.name;
        com.image = json.top[i].game.box.large;
        console.log(com.name);
        com.save(function(err, post){
            if(err){return next(err);}
            res.json(com);
        });
    }
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
