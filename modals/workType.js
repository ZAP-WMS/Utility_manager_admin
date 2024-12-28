const mongoose=require('mongoose');
var valid = require('validator');
const worktypeSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'name of work is required'],

    },
   
})
module.exports=mongoose.model('TypeOfWork',worktypeSchema)