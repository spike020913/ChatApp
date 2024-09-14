import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import path from "path";


import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectMongoDB from "./db/connectMongoDB.js";
import { app, server } from "./socket/socket.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// console.log(PORT)
// Middleware
app.use(express.json());  // To parse the incoming request with JSON payloads
app.use(cookieParser()); // To parse the incoming cookies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve static assets if in production
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, ()=> {
    connectMongoDB();
    console.log(`Server is running on port ${ PORT } `)
});