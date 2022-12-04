// Async patterns
// 3-async-await.js

// Imports
const { readFile, writeFile } = require('fs');

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
const start = async() => {
	try {
		// We can use getText with async / await because it's return a Promise !
		const first = await getText('../content/first.txt');
		const second = await getText('../content/second.txt');
		writeFile('../content/result-async-await.txt', `Here is the result : ${ first } ${ second }`, (error, result) => {
			if (error){ console.log(error); return; }
			console.log('Done with this task');
		});
		const result = await getText('../content/result-async-await.txt');
		console.log(result); //  Here is the result : Hello this is the first text file ! Hello this is the second text file !
	} catch (error){
		console.log(error);
	}
};
start();