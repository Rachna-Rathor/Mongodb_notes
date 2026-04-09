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




// Mongoose Query Behavior

// Connection Dependency
//     -> No query is executed until Mongoose is connected to the database.
//     -> Queries will be queued internally and executed once the connection is established
//     -> mongoose.connect(uri);
//     // Only after successful connection, queries will run

// Shared Connection
//     -> A single Mongoose connection is reused across all files/modules.
//     -> This means you typically connect once (e.g., in index.js or db.js) and then import the models in other files without reconnecting.

//     // db.js
//     mongoose.connect(uri);

//     // userModel.js
//     const User = mongoose.model("User", userSchema); // uses the same connection