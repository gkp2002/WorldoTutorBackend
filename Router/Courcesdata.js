const express = require('express')
const Course = require('../Mongoose/Cources')
const { model, default: mongoose } = require('mongoose')
const Router = express.Router()
Router.post("/courses",async (req,res)=>{
    console.log(req.body)
    let data = new Course(req.body)
    let result = await data.save();
    res.send(result);
})
Router.get("/data",async (req,res)=>{
    console.log(req.body)
    const result = await Course.find();
    res.send(result)
})
Router.get("/detail/:Name",async (req,res)=>{
    console.log(req.params)
    const result = await  Course.findOne({Name:req.params.Name});
    res.send(result)
})

module.exports = Router;