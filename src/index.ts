import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { authRoutes, authMiddleware, roleMiddleware } from "./auth";
import connectDB from "./utils/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());



app.use("/api/v1/auth", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Healthcare Portal API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
