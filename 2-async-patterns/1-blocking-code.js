// Async patterns
// 1-blocking-code.js

// Imports
const http = require('http');

// Code
const server = http.createServer((req, res) => {
	if (req.url === '/'){
		res.end('Home page');
		return;
	}
	if (req.url === '/about'){
		// Blocking code !!!
		// We must use asynchronous methods instead !!!!
		for (let i = 0 ; i < 1000 ; i++){
			for (let j = 0 ; j < 1000 ; j++){
				console.log(`${ i } ${ j }`);
			}
		}
		res.end('About page');
		return;
	}
	res.end('Error page');
});
server.listen(5000, () => {
	console.log('Server is listening on port 5000 !');
});