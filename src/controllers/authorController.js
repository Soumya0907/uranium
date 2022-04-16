const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const createNewAuthor = async function(req,res){
    let newAuthor = req.body
    let savedData = await AuthorModel.create(newAuthor)
    res.send({newAuthor:savedData})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createNewAuthor = createNewAuthor