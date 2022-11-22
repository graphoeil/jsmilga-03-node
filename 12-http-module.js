// Built-in modules
// HTTP module

// All http properties
const http = require('http');

// Create a server
const server = http.createServer((request, response) => {
	// Request
	if (request.url === '/'){
		// Response
		response.end('Welcome to our home page.');
		// or response.write('Welcome to our home page.'); response.end();
		return;
	}
	if (request.url === '/about'){
		response.end('Here is our short history...');
		return;
	}
	// Default reponse (error or page 404)
	response.end(`
		<h1>Oops ! 404</h1>
		<p>We can't seem to find the page your are looking for !</p>
		<a href="/">Back to home page</a>
	`);
});
// http://localhost:3000/ => Welcome to our home page.
server.listen(3000);