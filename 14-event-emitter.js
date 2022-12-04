// Events
// 14-event-emitter.js

// Imports
const EventEmitter = require('events');

// Instance of EventEmitter class
const customEmitter = new EventEmitter();

// on => listen for an event
// Order matters ! (Like with jQuery)
// Then on first and emit last !
customEmitter.on('response', (name, age) => {
	console.log(`Data receive : ${ name }, ${ age } year's old !`);
});
customEmitter.on('response', () => {
	console.log(`Some other logic here...`);
});

// emit => emit an event
customEmitter.emit('response', 'Cahouet', 10);