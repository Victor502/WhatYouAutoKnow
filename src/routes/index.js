// Routes Folder
"use strict";

const router = require('express').Router();

router.use('/advice', function(req, res, next) {
  res.end('');
});

module.exports = router;
