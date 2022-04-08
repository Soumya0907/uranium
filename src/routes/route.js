const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies', function(req, res) {
    let movieArr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(movieArr)
});

router.get('/movies/:indexNumber', function (req, res) {
    let movieArr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    let index = req.params.indexNumber
    if(index<movieArr.length){
        res.send(movieArr[index])
    } else {
        res.send("Error: use a valid index")
    }
    
});

router.get('/films',function(req,res){
    let filmArr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    res.send(filmArr)
       
})

router.get('/films/:filmId',function(req,res){
    let u = req.params.filmId
    let filmArr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let i
    for(i =0;i<filmArr.length;i++){
        if (filmArr[i].id==u){
            res.send(filmArr[i])
            break
        } 
    }
    if (i===filmArr.length){
        res.send('No movie exists with this id')
    }
})

router.get('/missingnumber',function(req,res){
    let arr = [1,2,3,4,5,7,8,9]
    let missing = []
    let sum = 0
    for(let i in arr){
        let x= arr[i]-arr[i-1]
        let diff = 1
        if(diff<x){
            missing.push(arr[i-1]+diff)
            diff++
        }
    }
    console.log(missing);
    res.send('done')

})

router.get('/missingarray',function(req,res){
   let arr = [33,34,35,37,38,39]
    let missing = []
    let sum = 0
    for(let i in arr){
        let x= arr[i]-arr[i-1]
        let diff = 1
        if(diff<x){
            missing.push(arr[i-1]+diff)
            diff++
        }
    }
    console.log(missing);
    res.send('done')

})


module.exports = router;
// adding this comment for no reason