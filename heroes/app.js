var express = require('express');
var http = require('http');
var app = express();

// ROUTES
var index = require('./routes/index');
var users = require('./routes/users');

// app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/', index);
app.use('/users', users);

http.createServer(app).listen(8080);