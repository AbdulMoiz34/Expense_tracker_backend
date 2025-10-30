import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo db connected");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;