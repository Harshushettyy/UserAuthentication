import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("connected to DB!..");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
