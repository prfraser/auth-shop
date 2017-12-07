const request = require('supertest');
const app = require('../server.js');
const User = require('../models/User');
const chai = require('chai');

const should = chai.should()

const testEmail = 'john@doe.com'
let token
describe('Test routes', () => {

	it('should return 404 for an invalid URL', (done) => {
		request(app)
			.get('/bad-url')
			.expect(404, done)
	});
	
	it('should register a user', (done) => {
		request(app)
			.post('/auth/register')
			.send({ 
				firstName: 'bill', 
				lastName: 'harris', 
				email: testEmail, 
				password: 'password'
			})
			.expect(200, done)
	});

	it('should log a user in', (done) => {
		request(app)
			.post('/auth')
			.send({ 
				email: testEmail, 
				password: 'password'
			})
			.expect(200)
			.then((response) => {
				token = response.body.token
				done()
			})
	});

	it('should require correct credentials', (done) => {
		request(app)
			.post('/auth')
			.send({ 
				email: testEmail, 
				password: 'passwasdford'
			})
			.expect(401, done)
	});

	it('should require a token to view products', (done) => {
		request(app)
			.get('/products')
			.expect(401, done)
	});

	it('should display products with a valid token', (done) => {
		request(app)
			.get('/products')
			.set('Authorization', 'Bearer ' + token)
			.expect(200)
			.then((response) => {
				// Make sure the response is the array!
				response.body.should.be.an('array')
				done()
			})
	});

	it('should only let an admin through to /admin', (done) => {
		request(app)
			.get('/admin')
			.expect(401, done)
	});
	
	after(() => {
		User.remove({ email: testEmail }).then(() => {
			console.log('Cleaned up the DB!')
		});
	});

});

