const { MongoClient } = require("mongodb");
let db;

async function run() {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    console.log("database connected");

    db = client.db("test");

    const directories = db.collection("directories");
    const user = db.collection("user");
    const session = client.startSession()
    session.startTransaction()
    try {
        await directories.insertOne({ name: "db", userName: "Anurag" });
        await user.insertOne({ name: "Rachna", age: 21 });
        session.commitTransaction();
        console.log("data successfully inserted"); // ✅ instead of res.send

    } catch (error) {
await session.abortTransaction()
    }
    await client.close();
}

module.exports = {
    run,
};


// What is a Session?
// A session in MongoDB is a logical context that groups multiple operations together.
// It allows MongoDB to track and manage operations as part of transactions or causal consistency.
// Think of a session as a workspace where you can perform one or more transactions safely.
// Why Sessions Are Used
// 1 : To start transactions (for atomic multi-document or multi-collection operations).

// 2: To maintain causal consistency (operations happen in a guaranteed order).

// 3: To logically group related operations together under one context.