const mongoose = require('./init');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.schema({
	firstName: String,
	lastName: String,
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: 'email',
	usernameLowerCase: true, // Treat emails as case insensitive
	session: false // We'll use JWT
})

const User = mongoose.model('User', userSchema)

module.exports = User
