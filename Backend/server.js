import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import { connectDB } from "./config/database.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
    cors({
        origin: "https://feedback-form-navy.vercel.app/", // Your Vercel frontend URL
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/feedback", feedbackRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome " });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
