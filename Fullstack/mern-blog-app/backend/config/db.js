import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
