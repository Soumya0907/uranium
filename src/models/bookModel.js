const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName : String, 
    author_id :Number,
    price :Number,
    rating : Number
})

module.exports = mongoose.model('Book', bookSchema)

// const bookSchema = new mongoose.Schema( {
//     bookName:{type:String,required:true}, 
//     authorName: String, 
//     tags: [String],
//     totalPages: Number,
//     year: {type:Number, default:2021},
//     stockAvailable: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
// }, { timestamps: true });

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
