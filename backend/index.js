import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();
dotenv.config();

const __dirname = path.resolve();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use(express.json());
app.use(cookieParser());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
