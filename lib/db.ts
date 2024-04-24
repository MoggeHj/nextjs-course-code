import exp from "constants";
import { MongoClient } from "mongodb";

const connectToDatanbase = async () => {
  debugger;
  const client = new MongoClient(process.env.MONGODB_URI);
  console.log(process.env.MONGODB_URI);
  return await client.connect();
};

export default connectToDatanbase;
