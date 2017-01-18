var express = require('express');
var app = express();

app.use(express.static (__dirname + '/'));

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.get('/about', function (request, response) {
	response.sendFile(__dirname + '/about.html');
});

app.get('/profile', function (request, response) {
	response.sendFile(__dirname + '/profile.html');
});

app.post('/testing', function (request, response) {
	console.log(request.body);
});

app.listen(3000, function () {
	console.log('Server up and running on port 3000!');
});