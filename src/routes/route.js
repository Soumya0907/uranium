const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorController = require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", authorController.createAuthor)

router.get("/getId",authorController.getId)

router.post("/getName",authorController.getName)

router.get("/bookRange",authorController.bookRange)















//router.post("/createUser", UserController.createUser  )


// router.get("/getUsersData", UserController.getUsersData)

//router.get("/bookList", BookController.bookList)


//  router.get("/booksInYear/:year",BookController.booksInYear)

// router.get("/particularBooks",BookController.particularBooks)

//  router.get("/xINRBook",BookController.xINRBooks)

// router.get("/randomBooks",BookController.randomBooks)

module.exports = router;