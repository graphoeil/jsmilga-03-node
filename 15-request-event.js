// Events
// 15-request-event.js

// Imports
const http = require('http');

// Classic way
// const server = http.createServer((req, res) => {
// 	res.end('Welcome');
// });

// Using Event Emitter API
const server = http.createServer();

// The server emit "request" event !

// Listen for "request" event
server.on('request', (req, res) => {
	res.end('Welcome');
});

// Listen on port
server.listen(5000);