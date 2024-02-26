import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth-routes.js";
import messageRoutes from "./routes/messgae-routes.js";
import userRoutes from "./routes/user-routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

import cookieParser from "cookie-parser";
import { app, server } from "./socket/Socket.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     optionsSuccessStatus: 200,
//   })
// );
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json("<h1>hi</h1>");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
server.listen(PORT, connectToMongoDB);
