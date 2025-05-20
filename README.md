

# Feedback Form

A modern feedback collection system built with React (SCSS for styling) on the frontend and Node.js with Express and MongoDB on the backend. Users can submit feedback, which is stored in a database and displayed immediately upon submission.

---

## 🚀 Project Overview

This project offers:

* A responsive, accessible feedback form
* Real-time submission handling with UX-friendly feedback
* Clean UI built with SCSS and responsive breakpoints
* A RESTful backend API with input validation and MongoDB integration

---

## 📁 Project Structure

```
feedback-form/
├── Frontend/              # React + SCSS frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
|   |   |-- Layout/
|   |   |-- Pages/
|   |   |-- services/
│   │   ├── scss/
│   │   ├── ser/
│   │   └── App.js
|
├── Backend/               # Node.js backend
│   ├─ src/
|   |---|-- config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── .env
|   ...
```

---

## 🔧 Getting Started

### Frontend Setup

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start development server:

   ```bash
   npm start
   ```

### Backend Setup

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Add environment variables:

   ```
   PORT=7001
   MONGODB_URI= Your mongodb url
   ```

3. Start backend server:

   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| POST   | /api/feedback | Submit feedback             |
| GET    | /api/feedback | Retrieve submitted feedback |

---

## 💡 Features

* Responsive SCSS styling with Sass maps
* Client-side and server-side validation
* Live UI update after form submission
* Centralized API layer in frontend
* Backend input sanitization and error handling

---

## 🧩 Tech Stack

* Frontend: React, SCSS (Sass)
* Backend: Express.js, MongoDB, Mongoose
* Tooling: Axios, dotenv, concurrently


