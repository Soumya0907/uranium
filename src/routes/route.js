const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController");
const authorModel = require('../models/authorModel');
const publisherModel = require('../models/publisherModel');
const bookModel=require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor",authorController.createNewAuthor)

router.post("/createNewPublisher",publisherController.createNewPublisher)

router.post("/createNewBook",async function(req,res){
    let data = req.body
    if (data.author===undefined){
        res.send("author is required")
    } else if(data.author!==undefined){
        let savedData = await authorModel.find({_id:data.author})
        
        if (savedData.length===0){
            res.send("author is not present")
        } else if (data.publisher===undefined){
            res.send("publisher id is required")
        } else if(data.publisher!==undefined){
            let data1 = await publisherModel.find({_id:data.publisher})
            if (data1.length===0){
                res.send("publisher is not present")
            } else {
                let savedData1 = await bookModel.create(data)
                res.send(savedData1)

            }
            
        }
    
    }
})

router.get("/getNewBooks",async function(req,res){
    let newBooks = await bookModel.find().populate('author')
    let newBooks1 = await bookModel.find().populate('publisher')
    res.send({newBooks,newBooks1})

})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)


router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;