// Streams
// 18-http-streams.js

// Imports
const http = require('http');
const fs = require('fs');

// Display big text on the local server
http.createServer((req, res) => {
	// Warning, we send big file, user must download !!!
	// const text = fs.readFileSync('./content/big.txt', 'utf8');
	// res.end(text);

	// Here we send the big.txt in several pieces
	const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
	fileStream.on('open', () => {
		// The method used to take a readable stream and connect it to a writeable stream
		fileStream.pipe(res);
	});
	fileStream.on('error', (error) => {
		res.end(error);
	});
}).listen(5000);