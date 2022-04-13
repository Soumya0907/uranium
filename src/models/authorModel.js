const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema( {
    author_id: {type:Number,required:true},
    authorName : String,
    age :Number,
    adress : String
} )

module.exports = mongoose.model('Author', authorSchema)