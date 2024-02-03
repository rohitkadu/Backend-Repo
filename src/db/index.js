import mongoose from "mongoose";
// import { Express } from "express";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\nMongoDB successfully connected!! \nDB Host : ${connectInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Conncetion Failed! ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;