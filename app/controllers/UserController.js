const express = require("express")
const axios =require('axios')
const router = express.Router()


router.get("/users/gender",function(req,res){

    const key=`enter the key here`
    const name=req.query.name

    if(name!=''){
    const url=`https://gender-api.com/get?name=${name}&key=${key}`
    axios.get(url)
    .then(function(response){
        const data=response.data
        res.json(`The gender of ${name} is ${data.gender}`)
    })
    .catch(function(err){
        console.log(err.message)
    })

}
else {
    res.json('please enter the name')
}
    
})


module.exports = {
    userRouter: router
}