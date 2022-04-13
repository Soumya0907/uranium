const { count } = require("console")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const authorList=async function(req,res){
    let authorData=await authorModel.find({authorName:"Chetan Bhagat"})
    let authorId =authorData[0].author_id
    let data1 = await bookModel.find({author_id:authorId}).select({bookName:1,_id:0})
    res.send(data1)
 }

 const updatePrice = async function(req,res){
     let bookData = await bookModel.find({bookName:"Two States"})
     let authorId = bookData[0].author_id
     let authorNam = await authorModel.find({author_id:authorId}).select({authorName:1,_id:0})
     let bookName = bookData[0].bookName
     let updatedPrice = await bookModel.findOneAndUpdate({name:bookName},{price:100},{new:true}).select({price:1,_id :0})
     res.send({msg:authorNam,updatedPrice})
 }

 const bookRange = async function(req,res){
     const data = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
     let id = data.map(x=>x.author_id)
     let set = []
     for(let i=0;i<id.length;i++){
         let m = id[i]
         let data1 = await authorModel.find({author_id:m}).select({authorName:1,_id:0})
         set.push(data1)
     }
     const authorName = set.flat()
     res.send({msg:authorName})
 }







module.exports.createAuthor= createAuthor
module.exports.authorList = authorList
module.exports.updatePrice = updatePrice
module.exports.bookRange = bookRange
