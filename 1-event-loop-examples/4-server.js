// Event loop
// 4-server.js

// Imports
const http = require('http');

// Code
const server = http.createServer((request, result) => {
	console.log('Request event'); // Log in the terminal
	result.end('Hello Wolrd!');
});
server.listen(5000, () => {
	console.log('Server listening on port : 5000...');
});