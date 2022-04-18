const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const batchModel = require("../models/batchModel");
const developerModel = require('../models/developerModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBatch",async function (req, res) {
    let batch = req.body
    let savedData= await batchModel.create(batch)
    res.send({batch: savedData})
})

router.post("/createDeveloper",async function(req,res){
    let developer = req.body
    let savedData = await developerModel.create(developer)
    res.send({developer:savedData})
})

router.get("/scholarship-developers",async function(req,res){
    let savedData = await developerModel.find({gender:"female",percentage:{$gte:70}})
    res.send({savedData})
    })


router.get("/getDevelopers",async function(req,res){
    let data = req.query
    let data1 = await batchModel.findOne({name:data.program}).select({_id:1})
    let data2 = await developerModel.find({percentage:{$gte:data.percentage},batch:data1._id})
    res.send(data2)


})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;