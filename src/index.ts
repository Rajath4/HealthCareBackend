import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { authRoutes } from "./auth";
import connectDB from "./utils/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Healthcare Portal API");
});

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
  });
