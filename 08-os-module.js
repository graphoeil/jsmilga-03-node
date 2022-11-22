// Built-in modules
// OS module

// All OS methods
const os = require('os');

// Info about current user
const user = os.userInfo();

// How long this computer is running
// Returns the systeme uptime in seconds
console.log(`The system uptime is ${ os.uptime() }`);

// Current OS
const currentOS = {
	name:os.type(),
	release:os.release(),
	totalMem:os.totalmem(),
	freeMem:os.freemem(),
	architecture:os.arch()
};
console.log(currentOS);
/* {
  name: 'Darwin',
  release: '17.7.0',
  totalMem: 25769803776,
  freeMem: 12636565504,
  arch: 'x64'
} */