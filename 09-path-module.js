// Built-in modules
// Path module

// All path module
const path = require('path');

// Separator
console.log(path.sep); // show a single /

// Join sequence of path segment
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // /content/subfolder/test.txt

// Base name
const base = path.basename(filePath);
console.log(base); // test.txt

// Absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // /Volumes/DevDisk/React/JSmilgaNode/03-nodeTutorial/content/subfolder/test.txt