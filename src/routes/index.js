let express = require('express');
let router = express.Router();
let tasks = require('../tasks/tasks');

router.get('/api', (req, res) => {
  res.send('yo from /api base route')
  tasks.addMovie();
});


router.post('/api/', (req, res) => {

})


module.exports = router;
