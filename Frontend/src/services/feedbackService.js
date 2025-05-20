import { api } from "./apiClient.js";

export const feedbackService = {
    submitFeedback: async (formData) => {
        return await api.post("/api/feedback", formData);
    },
};
