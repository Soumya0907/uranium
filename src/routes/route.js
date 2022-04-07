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


module.exports = router;
// adding this comment for no reason