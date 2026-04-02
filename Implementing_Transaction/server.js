const express=require("express")
const app=express()
const {run}=require("./dbTransaction")
console.log(run);
app.get("/",(req,res)=>{
    res.send("server running")
})

run()
app.listen(4000,()=>{
    console.log("running....")
})