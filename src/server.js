//src/server.js
const express = require('express');
const config = require('./config');
const path = require('path');
const router = require('./routes');
const app = express();

//Created path
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.use('/api', router);




app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});