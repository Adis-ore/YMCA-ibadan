import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to data base");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/ymca`);
};

export default connectDB;
