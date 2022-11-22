// Modules
// Equivalent of import in React ,-)
// CommonJS, every file in node is module (by defaults)
// Modules, encapsulated code (only share minimum)

// Imports
const names = require('./04-names');
// or const { cahouet, jambon } = require('./04-names');
const { cahouet } = names;
const { sayHi } = require('./05-utils');

// Alternative export syntax
const data = require('./06-alternative-flavor');
// console.log(data); // { items: [ 'item1', 'item2' ], person: { name: 'Bob' } }
// console.log(data.items); // [ 'item1', 'item2' ]
// console.log(data.person); // { name: 'Bob' }

// Mind grenade, when we import a module, we invoke all methods invoked in it
require('./07-mind-grenade');
// In the terminal => The sum is : 15

// Methods
sayHi(cahouet);
sayHi(names.jambon);
sayHi('Pataud');