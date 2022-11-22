// Built-in modules
// FS module - async

// Async methods
const { readFile, writeFile } = require('fs');

// Async vs Sync
console.log('Start');

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
			// console.log(result); // undefined because we don't read ,-)
			console.log('Done with this task');
		});
	});
});

// Async vs Sync
console.log('Start the next one');

/* After node app.js :
Start
Start the next one
Done with this task
*/