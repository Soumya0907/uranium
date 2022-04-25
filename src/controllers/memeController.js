let axios = require("axios")

let getMemes=async function(req,res){
    try{
    let options={
        method:"get",
        url:"https://api.imgflip.com/get_memes"
    }
    const result=await axios(options)
    let data=result.data 
    res.status(200).send({msg:data})
}
catch(err){
    res.status(500).send({msg:err.message})
}
}

let createMeme = async function(req,res){
    try{
        let{template_id} = req.query
        let{text0} = req.query
        let{text1} = req.query
        let{username} = req.query
        let{password} = req.query
        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`

        }
        let result=await axios(options)
        let data=result.data
        res.status(200).send({data:data})
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }

}
module.exports.getMemes=getMemes
module.exports.createMeme=createMeme
