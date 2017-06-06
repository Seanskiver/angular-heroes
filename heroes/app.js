var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));




http.createServer(app).listen(8080);