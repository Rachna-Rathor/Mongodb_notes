const { MongoClient } = require("mongodb");
let db;

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  console.log("database connected");

  db = client.db("test");

  const directories = db.collection("directories");
  const user = db.collection("user");

  await directories.insertOne({ name: "db", userName: "Anurag" });
  await user.insertOne({ name: "Rachna", age: 21 });

  console.log("data successfully inserted"); // ✅ instead of res.send

  await client.close();
}

module.exports = {
  run,
};