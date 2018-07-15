const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitter');

const tweetSchema = mongoose.Schema({
    id: {
        type: String,
        unique: [true, "Este tweet ya existe"],
        required: [true, "Necesita introducir un id de tweet"]
    },
    text: {
        type: String,
        required: [true, "Necesita introducir un texto"]
    },
    owner : {
        type: String,
        required: [true, 'Usuario dueño del tweet requerido']
    },
    createdAt : {
        type: String
    }
});

const tweetdb = mongoose.model('tweet', tweetSchema);

module.exports = tweetdb;