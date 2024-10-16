import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { authRoutes } from "./auth";
import connectDB from "./utils/db";
import appointmentRouter from "./appointment/routes/AppointmentRoutes";
import dashboardRouter from "./dashboard/routes/DashboardRoutes";
import userRouter from "./user/routes/UserRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.use('/api/v1/appointment', appointmentRouter);

app.use('/api/v1/dashboard', dashboardRouter);

app.use('/api/v1/user', userRouter);

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
