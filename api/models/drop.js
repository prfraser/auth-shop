const Product = require('./Product');
const Store = require('./Store');

Store.deleteMany()
	.then(() => {
		console.log('Deleted all Stores.')
	})
	.catch((error) => {
		console.log('An error occured trying to delete all Stores.', error)
	})

Product.deleteMany()
	.then(() => {
		console.log('Deleted all Products.')
	})
	.catch((error) => {
		console.log('An error occured trying to delete all Products.', error)
	})