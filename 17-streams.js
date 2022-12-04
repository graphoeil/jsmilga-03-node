// Streams
// A stream is an abstract interface for working with streaming data.
// 17-streams.js

// Imports
const { createReadStream } = require('fs');

// Stream
const stream = createReadStream('./content/big.txt', { encoding:'utf8' });

// Default 64kb by buffer
// Last buffer - remainder
// hightWaterMark - control buffer size
// const stream = createReadStream('../content/big.txt', { highWaterMark:90000 });
// const stream = createReadStream('../content/big.txt', { encoding:'utf8' });

// Events
stream.on('data', (result) => {
	console.log(result);
});
stream.on('error', (error) => {
	console.log(error);
});