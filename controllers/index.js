var express = require('express'),
    router  = express.Router();
    
router.use('/authors', require('./authors'));
//router.use('/books', require('./books'));
    
router.get('/', function(req, res) {
    res.send('root');
});

module.exports = router;