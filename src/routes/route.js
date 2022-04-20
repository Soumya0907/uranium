const express = require('express');
const router = express.Router();
const commonMiddlewares = require("../middlewares/commonMiddlewares.js")
const userModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const orderModel = require("../models/orderModel.js")
const productModel = require("../models/productModel.js")



// router.get("/test-me", function (req, res) {
//     console.log(req)
//      let forwarded = req.headers['x-forwarder-for']
//      let ip = forwarded?forwarded.split(/,/)[0]:req.connection.remoteAddress
//     console.log(ip)
//     console.log(req.route.path)
//     let date = new Date()
//     console.log(date)
//     res.send("My first ever api!")
// })


router.post("/createProduct",async function(req,res){
    let data=req.body
      let savedData=await productModel.create(data)
      res.send(savedData)
  })
  
    
  router.post("/createUser",commonMiddlewares.mid,async function(req,res){
      let data=req.body
      let storedData=await userModel.create(data)
      res.send(storedData)
  })

 router.get("/order",commonMiddlewares.mid,async function(req,res){
    let order = req.body
    let userId = order.userId
    let productId = order.productId


    if(!userId) {
        return res.send({message: "user id must be present in the order detials"})   
    }

    
    let user = await userModel.findById(userId)

    if(!user) {
        return res.send({message: "Not a valid user id"})
    }

    
    if(!productId) {
        return res.send({message: "product id must be present in the order details"})
    }

    
    let product = await productModel.findById(productId) 

    if(!product) {
        return res.send({message: "Not a valid product id"})
    }

    let orderCreated = await orderModel.create(order)
    if(req["isFreeAppUser"]==true){
        await orderModel.findOneAndUpdate(
            {},
            {$set:{amount:0,isFreeAppUser:true}}
        )
    }
    else{
        let data=product.price
        await userModel.findOneAndUpdate(
            {_id:user},
            {$inc:{balance:-data}}
        )
        await orderModel.findOneAndUpdate(
            {},
            {$set:{amount:data,isFreeAppUser:false}}
        )

    }
    res.send("Done successfully")
    

})


//router.post("/createBook", BookController.createBook  )




//  router.post("/createUser", UserController.createUser  )
//  //router.get("/getUsersData", UserController.getUsersData)


//  //const mid1= function ( req, res, next) {
//    //  console.log("Hi I am a middleware named Mid1")}
// //     // logic
// //     let loggedIn = false

// //     if (loggedIn== true) { 
// //         console.log( "OK LOGGED IS IS TRUE NOW")
// //         next ()
// //     }
// //     else {
// //         res.send ("Please login or register")
// //     }
// // }

// // // e.g. restricted and open-to-all API's can be handled like below now:
// // router.get('/homePage', mid1, UserController.feeds)
// // router.get('/profileDetails', mid1, UserController.profileDetails)
// // router.get('/friendList', mid1, UserController.friendList)
// // router.get('/changePassword', mid1, UserController.changePassword)

// // router.get('/termsAndConditions',  UserController.termsAndConditions)
// // router.get('/register',  UserController.register)





// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// // router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// // router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// // router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;