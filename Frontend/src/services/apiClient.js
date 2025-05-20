import axios from "axios";

const BASE_URL =  "https://feedback-form-production-2722.up.railway.app/";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});



