// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

//List comment
router.get('/file', function(req, res, next) {
  mongoose.model('File').find({deleted: {$ne: true}}, function(err, files) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(files);
  });
});

//create comment
router.post('/file', function (req, res, next) {
    const File = mongoose.model('File');
    const fileData = {
        title: req.body.title,
        description: req.body.description,
    };

    File.create(fileData, function (err, newFile) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        res.json(newFile);
    });
});


//update comment
router.put('/file/:fileId', function (req, res, next) {
    const File = mongoose.model('File');
    const fileId = req.params.fileId;

    File.findById(fileId, function (err, file) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        if (!file) {
            return res.status(404).json({
                message: "File not found"
            });
        }

        file.title = req.body.title;
        file.description = req.body.description;

        file.save(function (err, savedFile) {
            if(err) {
                console.error(err)
                return res.status(500).json(err);
            }
            res.json(savedFile);
        })

    })
});

//deletes comment
router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});

//Gets commment for editing
router.get('/file/:fileId', function (req, res, next) {
    //res.end(`Reading file '${req.params.fileId}'`);
    const {
        fileId
    } = req.params;
    // same as 'const fileId = req.params.fileId'

    const file = FILES.find(entry => entry.id === fileId);
    if (!file) {
        return res.status(404).end(`Could not find file '${fileId}'`);
    }

    res.json(file);
});



// Comment section



//List comment
router.get('/comment', function(req, res, next) {
  mongoose.model('Comment').find({deleted: {$ne: true}}, function(err, comments) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(files);
  });
});

//create comment
router.post('/comment', function (req, res, next) {
    const Comment = mongoose.model('Comment');
    const fileData = {
        comment: req.body.comment
    };

    Comment.create(fileData, function (err, newComment) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        res.json(newComment);
    });
});


//update comment
router.put('/comment/:fileId', function (req, res, next) {
    const Comment = mongoose.model('Comment');
    const fileId = req.params.fileId;

    Comment.findById(fileId, function (err, file) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        if (!file) {
            return res.status(404).json({
                message: "File not found"
            });
        }

        Comment.comment = req.body.comment;

        Comment.save(function (err, savedFile) {
            if(err) {
                console.error(err)
                return res.status(500).json(err);
            }
            res.json(savedFile);
        })

    })
});

//deletes comment
router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});

//Gets commment for editing
router.get('/file/:fileId', function (req, res, next) {
    //res.end(`Reading file '${req.params.fileId}'`);
    const {
        fileId
    } = req.params;
    // same as 'const fileId = req.params.fileId'

    const file = FILES.find(entry => entry.id === fileId);
    if (!file) {
        return res.status(404).end(`Could not find file '${fileId}'`);
    }

    res.json(file);
});








module.exports = router
