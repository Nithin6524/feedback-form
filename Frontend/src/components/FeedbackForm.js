import { useState } from "react";
import { feedbackService } from "../services/feedbackService";
import "../scss/components/FeedbackForm.scss";

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            feedback: "",
        });
    };

    const submitNewFeedback = () => {
        setIsSubmitted(false);
        setSubmittedData(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isLoading) return;

        setIsLoading(true);
        setError("");

        try {
            const response = await feedbackService.submitFeedback(formData);

            if (response.status === 201) {
                setSubmittedData({ ...formData });
                resetForm();
                setIsSubmitted(true);
            }
        } catch (error) {
            setError("Unable to submit the form. Please try again.");
            console.error("Form submission error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Display either the form or the submission confirmation, not both
    if (isSubmitted && submittedData) {
        return (
            <div className="feedback-form-container">
                <div className="submission-confirmation">
                    <h2>Thank you for your feedback!</h2>
                    <div className="submitted-details">
                        <p>
                            <strong>Name:</strong> {submittedData.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {submittedData.email}
                        </p>
                        <p>
                            <strong>Feedback:</strong>
                            <p
                            className="submitted-feedback"
                            >{submittedData.feedback}</p>
                        </p>
                    </div>
                    <button
                        className="new-feedback-button"
                        onClick={submitNewFeedback}
                    >
                        Submit another feedback
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="feedback-form-container">
            <h2>Feedback</h2>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={isLoading}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
