//src/server.js
const express = require('express');
const config = require('./config');
const path = require('path');
const router = require('./routes');
const app = express();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://victor502:November1980@gettingstarted-shard-00-00-jkgtn.mongodb.net:27017,gettingstarted-shard-00-01-jkgtn.mongodb.net:27017,gettingstarted-shard-00-02-jkgtn.mongodb.net:27017/test?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin;
MongoClient.connect(uri, function(err, db) {
  db.close();

//Created path
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.use('/api', router);




app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});