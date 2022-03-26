const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.get("/",async(req,res)=>{
    try{
        const user = await User.find().lean().exec()
        res.status(200).send(user)
    }
    catch(err){
        console.log(err.message)
    }
})

module.exports = router