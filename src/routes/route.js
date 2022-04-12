const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const books = require("../models/userModel.js")
const booksController = require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createNewBook", booksController.createNewBook )

router.get("/getAllBooks" , booksController.getAllBooks )


module.exports = router;