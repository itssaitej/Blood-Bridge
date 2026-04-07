# 🩸 Blood Bridge App

🚀 This is a full-stack project with separate frontend and backend repositories.

A full-stack web application to **search, add, and manage blood donors**, built using **React, Spring Boot, and JWT Authentication**.

---

## 🔗 Related Repository

Backend API:
https://github.com/itssaitej/Blood-Bridge-Backend

## 🚀 Live Demo

* 🌐 Frontend (Vercel): https://your-frontend-url.vercel.app
* 🧠 Backend (Railway): https://blood-bridge-backend-production.up.railway.app

---

## 🛠️ Tech Stack

### Frontend

* React (Create React App)
* JavaScript (ES6+)
* CSS

### Backend

* Spring Boot
* Spring Security + JWT Authentication
* REST APIs

### Database

* H2 Database (in-memory)

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## ✨ Features

* 🔐 User Authentication (Login/Register using JWT)
* 🔍 Search Blood Donors
* ➕ Add New Donors
* 👤 User-specific donor management
* 🌐 Fully deployed (Frontend + Backend)

---

## 📂 Project Structure

```
Blood-Bridge/
│
├── blood-donor-frontend/   # React App
└── blood-donor-backend/    # Spring Boot API
```

---

## ⚙️ How to Run Locally

### 🔧 Backend Setup

1. Navigate to backend folder:

```bash
cd blood-donor-backend
```

2. Run the application:

```bash
./mvnw spring-boot:run
```

(or use your IDE)

3. Backend runs at:

```
http://localhost:8080
```

---

### 💻 Frontend Setup

1. Navigate to frontend folder:

```bash
cd blood-donor-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm start
```

4. Frontend runs at:

```
http://localhost:3000
```

---

## 🔑 API Endpoints

### Authentication

* POST `/auth/register`
* POST `/auth/login`

### Donors

* GET `/donors`
* POST `/donors`

---

## 🔐 Environment Setup (Important)

### Frontend API URL

Update API base URL in frontend:

```js
const BASE_URL = "http://localhost:8080";
```

For production:

```js
const BASE_URL = "https://blood-bridge-backend-production.up.railway.app";
```

---

## 🧪 How to Test the App

1. Register a new user
2. Login using credentials
3. Add a donor
4. Search donors
5. Refresh page → data fetched again from backend

---

## ⚠️ Notes

* H2 database is in-memory → data resets on backend restart
* JWT token is stored in browser `localStorage`
* CORS is enabled for frontend-backend communication

---

## 🚀 Future Improvements

* ✏️ Edit/Delete donors
* 🔍 Advanced filtering (city, blood group)
* 📱 Responsive UI
* 🔐 Role-based authentication
* 🗄️ Switch to MySQL/PostgreSQL

---

## 👨‍💻 Author

**Sai Tej**
GitHub: https://github.com/itssaitej

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!
