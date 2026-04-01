const express=require("express")
const app=express()
const client=require("./dbTransaction")
client()
app.get("/",(req,res)=>{
    res.send("server running")
})

app.listen(4000,()=>{
    console.log("running....")
})