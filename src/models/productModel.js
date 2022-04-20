const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
	name:String,
	category:String,
	price:Number //mandatory property
});

module.exports = mongoose.model('product', productSchema) 