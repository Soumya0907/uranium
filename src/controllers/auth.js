const jwt=require("jsonwebtoken")
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    try{
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({msg:"Token is required"})
    
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    if(decodedToken){
        next()
    }
    }
    catch(err){
        res.status(400).send({status:"error",msg:err.message})

    }
    
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userModified = req.params.userId
    //userId for the logged-in user
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data

    if(userModified === userLoggedIn) {
        next()
    }
    else{
         res.status(403).send({status: "error",msg:"cannot access others account"})

    }
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise