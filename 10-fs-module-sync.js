// Built-in modules
// FS module - sync

// Can do => const fs = require('fs'); => fs.readFileSync ...
const { readFileSync, writeFileSync } = require('fs');

// Async vs Sync
console.log('Start');

// Read files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second); // Hello this is the first text file ! Hello this is the second text file !

// Create file
// If file doesn't exist, node will create it, otherwise node will overwrite it !
// To append to the file we need to pass a third argument => flag:'a'
writeFileSync('./content/result-sync.txt', `Here is the result : ${ first }, ${ second }`, {
	flag:'a'
});

// Async vs Sync
console.log('Done with this task');
console.log('Start the next one');

/* After node app.js :
Start
Hello this is the first text file ! Hello this is the second text file !
Done with this task
Start the next one
*/