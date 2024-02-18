import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import messageRoutes from "./routes/messgae-routes.js";
import userRoutes from "./routes/user-routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("<h1>Hello-World</h1>");
});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, connectToMongoDB);
