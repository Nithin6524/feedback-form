import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedback.js";
const router = express.Router();

router.get("/", getFeedback);
router.post("/", submitFeedback);

export default router;
