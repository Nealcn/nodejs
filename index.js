var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello Word --Neal\n');
}).listen(80,'https://neal.mybluemix.net');
console.log('Server running at https://neal.mybluemix.net:80');
