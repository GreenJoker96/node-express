var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
	// writeHead is sending the file type and the http code for the response
	// response.writeHead(200, {"Content-Type" : "text/html"});
	// response.write("use your imagination");
	// response.end()

	var path = url.parse(request.url, true).pathname;

	fs.readFile('index.html', function (error, content) {
		if (error) {
			response.writeHead (404);
		} else {
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.end(content);
		}
	});

	if (path === '/about') {
		fs.readFile('about.html', function (error, content) {
		if (error) {
			response.writeHead (404);
		} else {
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.end(content);
		}
	});
	}

});

server.listen(3000);
console.log('Listening on port 3000');