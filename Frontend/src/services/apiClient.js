import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "KSJDFKSJD";


console.log(BASE_URL);
export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
