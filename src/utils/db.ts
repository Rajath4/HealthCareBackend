// src/utils/db.ts
const mongoose = require("mongoose");

import dotenv from "dotenv";
import User from "../auth/models/User";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

// const MONGODB_URI = 'mongodb://myUser:myPassword@localhost:27017/myDatabase?authSource=admin';

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

/**
 * Connect to MongoDB using Mongoose
 */
const connectDB = async (): Promise<void> => {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
