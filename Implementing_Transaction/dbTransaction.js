const {MongoClient}=require("mongodb")
async function run(){
 const client=new MongoClient("mongodb://localhost:27017")
await client.connect()
console.log("database connected");

 const db=client.db("test")
const directories=db.collection("directories")
const user=db.collection("user")

await directories.insertOne({name:"db",userName:"Anurag"})
await user.insertOne({name:"Rachna",age:21})
await client.close()

}
run()