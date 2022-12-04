// Async patterns
// 4-node-native-options.js

// Imports
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// Transform a classic method to a method that return a promise
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// Code
const start = async() => {
	try {
		// We can use getText with async / await because it's return a Promise !
		const first = await readFile('./content/first.txt', 'utf-8');
		const second = await readFile('./content/second.txt', 'utf-8');
		await writeFile('./content/result-node-native.txt', `Here is the result : ${ first } ${ second }`);
		const result = await readFile('./content/result-node-native.txt', 'utf-8');
		console.log(result); //  Here is the result : Hello this is the first text file ! Hello this is the second text file !
	} catch (error){
		console.log(error);
	}
};
start();