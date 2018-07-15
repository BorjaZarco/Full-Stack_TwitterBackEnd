const router = require('express').Router();
const controller = require('./tweets.controller.js');

router.get('/', controller.getAllTweets);  //en orden de fecha
router.get('/:id', controller.getByTweetId);
router.post('/:id', controller.createTweet); //id de usuario
router.delete('/:id', controller.deleteTweet);

module.exports = router;