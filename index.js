const express = require('express');
const app = express();

const usersRouter = require('./api/users');

//middlewares
app.use(express.json());
app.use('/api/users', usersRouter);

app.listen(5000);