// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})


connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at ${process.env.PORT}`)
    })
} )
.catch( (err) => {
    console.log("MongoDB Connection Failed!! Async Function Responce Error = ")
} )





































/* FIRST APPROACH

import express from "express";
const app = express()

// We can connect DB directly using only single line 
// i.e. mongoose.connect('mongodb://127.0.0.1:27017/test');

// but that is not a professional approach

// We will us async/await inclusive of try-catch for better approach

// iife - Immediately Invoked Function Expressions 
( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERROM from DB : ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR : ", error)
        throw err
    }
} )()

*/