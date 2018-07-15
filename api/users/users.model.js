const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitter');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Este usuario ya está registrado"],
        required: [true, "Necesita introducir un nombre de usuario"]
    },
    name: {
        type: String,
        required: [true, "Necesita introducir un nombre"]
    },
    email : {
        type: String,
        validate: {
            validator: function (mail) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
            }, 
            message: 'No se trata de una direccion válida'
        },
        required: [true, 'Email requerido']
    },
    tweets : {
        type: Array
    }
});

const userdb = mongoose.model('user', userSchema);

module.exports = userdb;