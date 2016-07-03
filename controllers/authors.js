var express = require('express'),
    router = express.Router();
    
var findAll = function(req, res) {
    var db = req.app.get('db');
    db.test1.authors.find({}, function(err, result) {
        res.send(result);    
    });
}

var findById = function(req, res) {
    var db = req.app.get('db');
    var id = Number(req.params.id);
    if (id) {
        db.test1.authors.findOne(id, function(err, author) {
            if (!author){
                res.status('404');
            } 
            res.send(author);
        });
    }
    else {
        res.status('404').send('');
    }
    
}

router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;