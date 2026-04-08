const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:4
    },
    age:{
        type:Number,
        required:true,
        min:16
    },
    parentId:{
        type: mongoose.Schema.Types.ObjectId,
        required:function(){
           return this.age<18
        },
        default:null
    }
},{timestamps:true,strict:"throw"})

const User=mongoose.model("User",userSchema)

User.insertOne({name:"Ruchi",age:12});
User.findOne({Name:"Rachna"})
