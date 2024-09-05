import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // To parse the incoming request with JSON payloads
app.use(cookieParser()); // To parse the incoming cookies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=> {
    connectMongoDB();
    console.log(`Server is running on port ${ PORT } `)
});