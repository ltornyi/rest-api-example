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

var add = function(req, res) {
  var db = req.app.get('db');
  var a = req.body;
  if (a.hasOwnProperty('author_id')) {
    //PK specified but this is the insert function
    delete a.author_id;
  }
  db.test1.authors.save(a, function(err,inserted){
    if (err) {
      res.send({'error':'An error has occurred', 'text':err});
    } else {
      res.status('201');
      res.setHeader("Location","/authors/" + inserted.author_id);
      res.send(inserted);
    }
  })
}

var update = function(req, res) {
  var db = req.app.get('db');
  var a = req.body;
  var id = Number(req.params.id);
  a.author_id = id;
  db.test1.authors.save(a, function(err,updated) {
    if (err) {
      res.send({'error':'An error has occurred', 'text':err});
    } else {
      res.status('200');
      res.send(updated);
    }
  })
}

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', add);
router.put('/:id', update);

module.exports = router;
