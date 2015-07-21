'use strict';
var express = require('express');
var path = require('path');

//Create the app
var app = express();

//Set static files location (for frontend use)
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Start the server
app.listen(5555);
console.log('Magic happens on port ' + 5555);