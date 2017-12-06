const Product = require('./Product');

Product.deleteMany()
	.then(() => {
		console.log('Deleted all Products.')
	})
	.catch((error) => {
		console.log('An error occured trying to delete all Products.', error)
	})