import { MongoClient } from "mongodb";

//Need to whitelist the IP address in MongoDB Atlas
export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://morganhjelm82:gXPwBd5DLeIIX4Vj@next-js-react-the-compl.d2wdba8.mongodb.net/",
    { useUnifiedTopology: true }
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
