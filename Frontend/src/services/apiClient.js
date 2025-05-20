import axios from "axios";

const BASE_URL = "feedback-form-production-b57c.up.railway.app";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});



