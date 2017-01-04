// 'use strict';

let express = require('express');

// pull in routes
let routes = require('./routes/index');
// initialize app
let app = express();

//config
let dotenv = require('dotenv').config();
// dotenv.load();

// mongo
let mongoose = require('mongoose');
let db = require('./db/db').seedData();

//other dependencies
let request = require('request');
let bodyParser = require('body-parser');

// // configuration
app.set('port', process.env.PORT || 1337);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req);
})

app.listen(app.get('port'), () => {
  console.log('express app listening on port ' + app.get('port'))
})
// error handler
app.use(function (err, req, res, next) {
  console.error('error: ' + err.stack);
  console.log('req: ' + req);
  res.status(400).send(err.message);
});


// initialize routes
app.use('/', routes)


// DB setup

let mongodbUri = process.env.MONGODB_URL;
console.log('mongodbUri: ' + mongodbUri)
mongoose.connect(mongodbUri);
