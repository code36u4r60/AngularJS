var express = require('express');
var path = require('path');
var app = express();

var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8888);
console.log('Listening on port 8888...');