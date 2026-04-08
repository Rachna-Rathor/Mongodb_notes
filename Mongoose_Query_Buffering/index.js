const express=require("express")
const app=express()
const dbConnect=require("./config/db")
const userModel=require("./models/user.model")
userModel
app.get("/",(req,res)=>{
    res.send("server running")
})
let PORT=4000
dbConnect()
app.listen(PORT,()=>{
    console.log("PORT Start Listening");
})