const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });


const newAuthorSchema = new mongoose.Schema({
    authorName :String,
    age : Number,
    address: String,
    rating: Number

})

//module.exports = mongoose.model('Author', authorSchema)
module.exports = mongoose.model('NewAuthor',newAuthorSchema)
