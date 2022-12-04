// Async patterns
// 2-setup-promises.js

// Imports
const { readFile } = require('fs');

// Code
const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) => {
			if (err){
				reject(err);
				return;
			}
			resolve(data);
		});
	});
};
getText('../content/first.txt').then((result) => {
	console.log(result); // Hello this is the first text file !
}).catch((error) => {
	console.log(error);
});