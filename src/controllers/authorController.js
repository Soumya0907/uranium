const { count } = require("console")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getId=async function(req,res){
    let data=await authorModel.findOne({authorName:"Chetan Bhagat"})
    let data2=data.author_id
    let data1 = await bookModel.find({author_id:data2}).select({bookName:1,_id:0})
    res.send(data1)
 }

 const getName = async function(req,res){
    const data=await bookModel.findOneAndUpdate(
        {bookName:"Two states"},
        {$set:{price:100}},
        {new:true}

    )
    let storedData=data.author_id
    const data2=await authorModel.find({author_id:`${storedData}`})
    res.send(data,data2)
 }

 const bookRange = async function(req,res){
     const data = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
     let id = data.map(x=>x.author_id)
     let t = []
     for(let i=0;i<id.length;i++){
         let x = id[i]
         let data1 = await authorModel.find({author_id:x}).select({authorName:1,_id:0})
         t.push(data1)
     }
     const author_name = t.flat()
     res.send({msg:author_name})
 }







module.exports.createAuthor= createAuthor
module.exports.getId = getId
module.exports.getName = getName
module.exports.bookRange = bookRange
