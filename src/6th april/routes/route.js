const express = require('express');
const _=require("lodash")
const newwelcome = require("../logger/logger.js");
const date = require("../util/helper.js");
const month = require("../util/helper.js");
const batch = require("../util/helper.js");
const string1 = require("../validator/formatter");

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    newwelcome.welcome()
    date.printDate()
    month.printMonth()
    batch.getBatchInfo()
   console.log( string1.str1)
    console.log(string1.str2)
    console.log(string1.str3)

});

router.get('/hello', function (req, res){
    let monthArr = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    console.log(_.chunk(monthArr,4))

    let oddArr = [1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(oddArr))

    let arr1 = [1,2,1,3,5]
    let arr2 = [9,8,7,8,9]
    let arr3 = [4,5,6,5,3]
    let arr4 = [5,6,7,6,4]
    let arr5 = [3,2,1,2,3]
    console.log(_.union(arr1,arr2,arr3,arr4,arr5))

    let movie =[ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(_.fromPairs(movie))


})
module.exports = router
// adding this comment for no reason