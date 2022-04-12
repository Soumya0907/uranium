const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createNewBook =async function(req,res) {
    let data = req.body
    let saveData = await UserModel.create(data)
    res.send({msg: saveData})
}

const getAllBooks = async function(req,res) {
    let allBooks = await UserModel.find()
    res.send({msg:allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createNewBook = createNewBook
module.exports.getAllBooks = getAllBooks