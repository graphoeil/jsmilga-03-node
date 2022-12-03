// Npm - Global command, comes with node
// npm --version or npm --v

// Local dependency - use it only in this particular project
// npm i <packageName>

// Global dependency - use it in any project
// npm i -g <packageName>
// sudo npm install -g <packageName> (Mac)

// package.json - manifest file (stores important info about the project)
// Manual approach => create package.json in the root, create properties, ...
// Automatic approach => npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Nodemon
// nodemon is a tool that helps develop Node.js based applications 
// by automatically restarting the node application when file changes 
// in the directory are detected.
// npm i nodemon --save-dev

// Lodash
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const flatItems = _.flattenDeep(items);
console.log(flatItems); // [ 1, 2, 3, 4 ]
console.log('Hello people');