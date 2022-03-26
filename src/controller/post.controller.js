const express = require('express');
// const { send } = require('express/lib/response');

const router = express.Router()

const authenticate = require("../middleware/authenticate")

const Post = require("../models/post.model")

router.get("/",async(req,res)=>{
    try{
        const post = await Post.find().populate({path:"user_id",salect:{name:1,id:0}
    });
    return res.status(200).send(post)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
});

router.post("",authenticate,async(req,res)=>{
    req.body.user_id = req.userId
    try{
        const post = await Post.create(req.body)
        return res.status(200).send(post)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
});

router.patch("/:id",authenticate,async(req,res)=>{
    req.body.user_id = req.userId
    try{
        const post = await Post.findByIdAndUpdate(req.params.id)
        return res.status(200).send(post)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
});

router.delete("/:id",authenticate,async(req,res)=>{
    req.body.user_id = req.userId
    try{
        const post = await Post.findByIdAndDelete(req.params.id)
        return res.status(200).send(post)
    }
    catch(err)
    {
        return res.status(400).send({message:err.message})
    }
});

module.exports = router;

