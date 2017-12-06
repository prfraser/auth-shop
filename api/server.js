if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Plugins / middleware
app.use(bodyParser.json());

// Routes

app.listen(7000, (error) => {
	if (error) {
		console.log('There was a problem starting the server.', error)
	} else {
		console.log('Server listening on port 7000');
	}
})