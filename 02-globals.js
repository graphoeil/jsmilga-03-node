// GLOBALS - NO WINDOW !!!!
// __dirname => path to current directory
// __filename => file name
// require => function to use modules (commonJS)
// module => info about current module (file)
// process => info about env where the program is being executed
// and so much more ...

// In the terminal => push arrow up key to access last command ,-)

console.log(__dirname); // /Volumes/DevDisk/React/JSmilgaNode/03-nodeTutorial
console.log(__filename); // /Volumes/DevDisk/React/JSmilgaNode/03-nodeTutorial/app.js

// setInterval and setTimeout are accessible in nodeJS
setInterval(() => {
	console.log(`Hello World!`);
}, 1000);