const mongoose = require('mongoose')
const CoursesSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
    type:Date,
    default:Date.now
 }
})
module.exports = mongoose.model("cources",CoursesSchema)