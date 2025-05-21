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

const allowedOrigins = [
    "https://feedback-form-navy.vercel.app",
    "http://localhost:3000", // optional for local dev
    "https://feedback-form-qtzcrlsvo-nithin6524-gmailcoms-projects.vercel.app",
];

app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin (like mobile apps, curl, etc.)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            } else {
                return callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true, // if you're sending cookies or authorization headers
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
