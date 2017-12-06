const Product = require('./Product');

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