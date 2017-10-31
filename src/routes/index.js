// Routes Folder/index.js
"use strict";
const router = require('express').Router();
const mongoose = require('mongoose');

router.use('/advice', function(req, res, next) {
  res.end('');
});

module.exports = router;
