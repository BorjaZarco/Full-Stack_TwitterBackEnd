const usersModel = require('./users.model');
const tweetFunction = require('../tweets/tweets.controller');

module.exports = { getAll, getById, createUser, deleteUser , editUser };

function getAll (req, res) {
    usersModel.find()
        .then (response => {
            
            response.forEach(user => {
                tweetFunction.getTweetsFromUser(user.username )
                .then(tweet => {
                    user.tweets = tweet;
                })
            });
            
            res.json(response);
        });
}
//
function getById (req, res) {
    usersModel.findOne({ "username": req.params.id }) 
        .then( response => {
            tweetFunction.getTweetsFromUser(req.params.id)
                .then ( tweet => {
                    response.tweets = tweet;
                    res.json(response);
                })
        }) 
        .catch ( err  => {
            res.json(err);
        })
}

function createUser (req, res) {
    const { name, email, username } = req.body;
    const user = new usersModel ({ 
        name, email, username, tweets: [] 
    });
    const error = user.validateSync();
    if (!error) {
        user.save();
        res.json(user);
    } else {
        res.status(400).json(error.errors);
    }
}

function deleteUser (req, res) {
    const username = req.params.id;
    usersModel.findOne( { "username": req.params.id} )
        .remove()
        .then ( response => {
            tweetFunction.deleteTweetsFromUsername ( username );
            res.json(response);
        })
        .catch (err => {
            res.status(404).json(err);
        })
    
}

function editUser (req, res) {
    usersModel.findOne({ "username": req.params.id })
        .then(response => {
        if (req.body && req.body.email) {
            response.email = req.body.email;
        }

        if (req.body && req.body.name) {
            response.name = req.body.name;
        }
        response.save();
        res.json(response);
        })
        .catch(err => {
            res.status(404).json(err);
        })
} 

/*
TypeError: isValidUsername is not a function
- No se como pasar el parámetro username desde tweets.controller

function isValidUsername ( username ) {
    usersModel.findOne( { "username": username })
        .then(response => {return true} )
        .catch(err => {return false} )
}
*/
