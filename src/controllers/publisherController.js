const publisherModel= require("../models/publisherModel")


const createNewPublisher = async function(req,res){
    let newPublisher = req.body
    let savedData = await publisherModel.create(newPublisher)
    res.send({newPublisher: savedData})

    
}

module.exports.createNewPublisher = createNewPublisher
