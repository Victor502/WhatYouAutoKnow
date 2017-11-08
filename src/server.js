// src/server.js
const path = require('path');
// Load mongoose package
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const router = require('./routes');

// Connect to MongoDB and create/use database as configured
mongoose.connection.openUri(config.db.uri);
//mongoose.connection.openUri(`mongodb://${config.db.host}/${config.db.dbName}`);

// Import all models
require('./models/file.model.js');


const app = express();
app.use(bodyParser.json());


const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use('/api', router);


app.use(function(req, res, next) {
  res.end("I did not find anything");
});



app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
