// Import express for creating API's endpoints
const express = require('express');

// Import jwt for API's endpoints authentication
const jwt = require('jsonwebtoken');

// Creates an Express application, initiate
// express top level function
const app = express();

// A port for serving API's
const port = 5000;


// A demo get route
app.get('/', (req, res) => {
	res.json({
		route: '/',
		authentication: false
	});
});


// Listen the server
app.listen(port, () => {
	console.log(`Server is running : http://localhost:${port}/`);
});

