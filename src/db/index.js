import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"; // Aapke folder mein file ka naam 'constant.js' hai

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;