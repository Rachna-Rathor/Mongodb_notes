const mongoose=require("mongoose")
async function dbConnect(){
     try {
       await mongoose.connect("mongodb+srv://kumarirachna740_db_user:4GPlx3SfLRjoU7GE@cluster0.yqbt924.mongodb.net/?appName=Cluster0")
        console.log("connection successfull")
     } catch (error) {
        console.log(error)
        console.log("db connection failed")
     }
}

module.exports=dbConnect