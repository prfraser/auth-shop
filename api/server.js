if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { initialize, requireJWT, verifyAdmin } = require('./middleware/auth');

const app = express();

// Plugins / middleware
app.use(cors());
app.use(bodyParser.json());
app.use(initialize);

// Routes
app.use([
	require('./routes/products'),
	require('./routes/auth'),
	require('./routes/stores')
])

app.get('/admin', requireJWT, verifyAdmin, (req, res) => {
	res.send('Hello Admin!')
})

app.use((error, req, res, next) => {
	// JSON error handling
	res.status(500).send({ error: error.message })
});

app.use((req, res, next) => {
	// No other routes left. Must be 404!
	res.status(404).send({ error: `No route found for ${req.method} ${req.url}` });
});

// Turn on server
app.listen(7000, (error) => {
	if (error) {
		console.log('There was a problem starting the server.', error)
	} else {
		console.log('Server listening on port 7000');
	}
});

module.exports = app