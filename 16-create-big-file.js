// Streams
// 16-create-big-file.js

// Imports
const { writeFileSync } = require('fs');

// A very big file
for (let i = 0 ; i < 10000 ; i++){
	writeFileSync('./content/big.txt', `Hello Wolrd ${ i }\n`, { flag:'a' });
}