const Product = require('./Product');
const Store = require('./Store');

Product.create([
		{ brandName: 'Nike', name: 'Super cool shoes.' },
		{ brandName: 'Coca Cola', name: '390ml Glass Bottle Coke' },
		{ brandName: 'Apple', name: 'New iPhone X' }
	])
	.then((products) => {
		console.log('Created!', products)
	})
	.catch((error) => {
		console.log('An error occured tring to seed db.', error)
	})

Store.create([
		{ name: 'X-Center', location: '120 Brunswick Street, Fortitude Valley' },
		{ name: 'Urban Climb', location: '222 Cart Street, West End' },
		{ name: 'Woolworths', location: '123 Fake Street, Yeronga' }
	])
	.then((stores) => {
		console.log('Created!', stores)
	})
	.catch((error) => {
		console.log('An error occured tring to seed db.', error)
	})