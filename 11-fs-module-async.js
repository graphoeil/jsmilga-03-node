// Built-in modules
// FS module - async

// Async methods
const { readFile, writeFile } = require('fs');

// Read files
// The callback function will run when we're done ,-)
readFile('./content/first.txt', 'utf-8', (error, result) => {
	// Error
	if (error){
		console.log(error);
		return;
	}
	// OK, we have access to the data
	const first = result;
	readFile('./content/second.txt', 'utf8', (error, result) => {
		// Error
		if (error){
			console.log(error);
			return;
		}
		// OK, we have access to the data
		const second = result;
		// Write file
		writeFile('./content/result-async.txt', `Here is the result : ${ first }, ${ second }`, (error, result) => {
			if (error){ console.log(error); return; }
			console.log(result); // undefined because we don't read ,-)
		});
	});
});