let express = require('express');
let router = express.Router();

router.get('/api', (req, res) => {
  res.send('yo from /api base route')
});


router.post('/api/', (req, res) => {
  
})


module.exports = router;
