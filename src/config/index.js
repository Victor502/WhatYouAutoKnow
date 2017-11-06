// Config folder/index.js
"use strict";

module.exports = {
  appName: 'What you Auto know',
  port: 3000
}

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://victor502:November1980@gettingstarted-shard-00-00-jkgtn.mongodb.net:27017,gettingstarted-shard-00-01-jkgtn.mongodb.net:27017,gettingstarted-shard-00-02-jkgtn.mongodb.net:27017/test?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin;
MongoClient.connect(uri, function(err, db) {
  db.close();
});

