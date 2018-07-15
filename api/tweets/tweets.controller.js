const tweetsModel = require('./tweets.model');
//const userFunction = require('../users/users.controller');
let easyId = 0;

module.exports = { getAllTweets, getByTweetId, getTweetsFromUser, createTweet, deleteTweet, deleteTweetsFromUsername };

function getAllTweets(req, res) {
    tweetsModel.find().sort( { createdAt: 1 } )
        .then( response => {
            res.json(response);
        })
        .catch ( err => {
            res.json(err);
        })
}

function getByTweetId(req, res) {
    tweetsModel.findOne( { "owner": req.params.id } )
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        })
}

function createTweet (req, res) {
    /*
    if (!userFunction.isValidUsername ( req.params.id )) {
        return res.status(400).json({ error : "Username does not exist "});
    }
    */
    const { text } = req.body;
    
    const tweet = new tweetsModel({
        id: easyId, text, owner: req.params.id , createdAt: Date.now()
    });
    const error = tweet.validateSync();
    if (!error) {
        easyId += 1;
        tweet.save();
        res.json(tweet);
    } else {
        res.status(400).json(error.errors);
    }
}

function deleteTweet (req, res) {
    tweetsModel.findOne({ "id": req.params.id })
        .remove()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.status(404).json(err);
        })

}


function  getTweetsFromUser (username) {
    return tweetsModel.find({ "owner": username })
        .then( tweets  => tweets )
        .catch ( error =>  [] );
}


function deleteTweetsFromUsername (username) {
    tweetsModel.find( {"owner" : username} )
        .remove()
        .then( response => console.log ("Los tweets del usuario han sido eliminados") )
        .catch ( response => console.log("No se han podido eliminar los tweets del usuario") )
}

