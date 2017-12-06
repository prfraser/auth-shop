const mongoose = require('./init');

const Store = mongoose.model('Store', {
	name: String,
	location: String
});

module.exports = Store