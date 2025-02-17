import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://wallacecicero3280:owYMGZyP8XsG3Pdq@cluster0.7dnap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI);

export const db = client.db("WallFy");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
