// 'use strict';

let express = require('express');

// pull in routes
let routes = require('./routes/index');
// initialize app
let app = express();


// mongo
let mongoose = require('mongoose');
//other dependencies
var request = require('request');
var bodyParser = require('body-parser');

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


/* TO DO
https://github.com/jstorts/slacklist-tutorial/blob/master/slacklist.js
separate tasks (handler methods) into tasks/tasks.js, and in routes file you can import and use those methods (refer to strucutre inside link)


*/

// initialize routes
app.use('/', routes)
