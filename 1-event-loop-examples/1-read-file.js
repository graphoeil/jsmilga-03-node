// Event loop
// 1-read-file.js

// Imports
const { readFile } = require('fs');

// Code
console.log('Started a first task');
readFile('../content/first.txt', 'utf-8', (error, result) => {
	if (error){
		console.log(error);
		return;
	}
	console.log(result);
	console.log('Completed first task');
});
console.log('Starting next task');

/* Started a first task
Starting next task
Hello this is the first text file !
Completed first task */