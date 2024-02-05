import express from express;
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlencoded } from "express";

const app = express();

// CORS middleware - Cross Origin Resource Sharing 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//Major Configurations 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export default app;