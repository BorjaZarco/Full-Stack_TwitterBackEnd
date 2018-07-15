const errorhandler = require('errorhandler');
const tweetsRouter = require('./api/tweets');
const usersRouter = require('./api/users');
const express = require('express');
const morgan = require('morgan');
const app = express();


const config = require('./.env');
const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;


//middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(errorhandler( { log: errorNotification } ));
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);


function errorNotification (err, req) {
    const title = 'Error in '+ req.method + ' ' + req.url
}

app.listen(_PORT);