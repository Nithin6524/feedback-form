import Feedback from "../models/feedbackModel.js";

export const getFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbackList[0]);
    } catch (error) {
        console.error("Error retrieving feedback:", error);
        res.status(500).json({ error: "Server error." });
    }
};

export const submitFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();

        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error("Error saving feedback: ", error);
        res.status(500).json({ error: "Server error." });
    }
};
