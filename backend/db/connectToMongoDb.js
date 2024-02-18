import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    console.log("Error connecting to MongoDb", error.message);
  }
  console.log("connected SuccessFully");
};

export default connectToMongoDB;
