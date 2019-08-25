const express = require('express');
const morgan = require('morgan')
// const marker = require('@ajar/marker')

const { NODE_ENV } = process.env;
if(!(NODE_ENV && NODE_ENV === 'staging')){
  require('dotenv').config()
}

const user_router = require('./modules/user/user.router');
const {error_handler,not_found} = require('./middleware/errors.handler');

const app = express();

app.use(morgan('dev'))

// test routing
app.get('/api', (req, res) => {
  res.status(200).json({ express: 'Hello From Express' });
});

// actual routing
app.use('/api/users', user_router);


// central error handling
app.use(error_handler);

//when no routes were matched...
app.use('*', not_found);

module.exports = app;
