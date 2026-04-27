# 🩸 Blood Bridge App

🚀 This is a full-stack project with separate frontend and backend repositories.

A full-stack web application to **search, add, and manage blood donors**, built using **React, Spring Boot, and JWT Authentication**.

---

## 🔗 Related Repository

Backend API:
https://github.com/itssaitej/Blood-Bridge-Backend

## 🌐 Live Application

* 🔗 **Frontend (Vercel):** https://blood-bridge-neon.vercel.app
* 🔗 **Backend (Railway):** https://blood-bridge-backend-production.up.railway.app

---

## 🚀 Tech Stack

* **Frontend:** React (Create React App)
* **Backend:** Spring Boot (Java 17)
* **Database:** H2 (in-memory, for now)
* **Authentication:** JWT (JSON Web Token)
* **Deployment:**

  * Backend → Railway
  * Frontend → Vercel

---

## ✨ Features

* 🔐 JWT-based Login & Authentication
* 🔍 Search donors by city & blood group
* ➕ Add new donors
* ✏️ Edit donor (**only owner can edit**)
* 🗑️ Delete donor (**only owner can delete**)
* 🔄 Availability toggle with donation eligibility logic
* 📅 Smart donation tracking:

  * `lastDonationDate`
  * `nextEligibleDate`
* 🔒 Protected routes
* 🎯 Clean UI with conditional rendering

---

## 📁 Project Structure

```plaintext
Blood-Bridge/
│
├── blood-donor-backend/     # Spring Boot Backend
├── blood-donor-frontend/    # React Frontend
└── README.md
```

---

# 🧪 How to Test the App (Live)

---

## 🔹 Step 1: Open the App

👉 https://blood-bridge-neon.vercel.app

---

## 🔹 Step 2: Register a New User


To create a new account, you can use an API tool like **Postman** or **Thunder Client** too.

---

### 🔐 Register API

In Postman: 
**POST** `/auth/register`

```plaintext
https://blood-bridge-backend-production.up.railway.app/auth/register
```

---

### 📦 Request Body

```json
{
  "username": "testuser",
  "password": "12345",
  "name": "testname",
  "bloodGroup": "A+",
  "city": "Chennai",
  "area": "Electronic City",
  "location": "Near OU",
  "available": true
}
```

---

### ✅ Response

```json
{
  "message": "User + Donor registered successfully"
}
```

---

### ⚠️ After Registration

* Use the same credentials to log in via the web app:

👉 https://blood-bridge-neon.vercel.app

---

### 💡 Tip

You only need to register once — after that, login works normally from the UI.


## 🔹 Step 3: Login

* Login with existing credentials
* After login, JWT token is stored automatically

---

## 🔹 Step 3: Search Donors

* Enter:

  * City → e.g. `Hyderabad`
  * Blood Group → e.g. `A+`
* Click **Search**
* View results instantly

---

## 🔹 Step 4: Add a Donor

* Click **Add Donor**
* Fill details:

  * Name
  * City
  * Blood Group
  * Area
  * Location
  * Availability
* Submit → donor appears in search

---

## 🔹 Step 5: Edit / Delete (Owner Only)

* If you added the donor:

  * ✏️ Edit button will be visible
  * 🗑️ Delete option available
* Other users → cannot edit/delete

---

## 🔹 Step 6: Availability Logic

* Toggle availability after donation
* System calculates:

  * Next eligible donation date automatically

---

# 📸 Screenshots

## Login Page
![Login](assets/screenshots/LoginPage.png)

## Register Page
![Register](assets/screenshots/RegisterPage.png)

## Dashboard
![Dashboard](assets/screenshots/HomePage.png)

## Add Donor
![Add Donor](assets/screenshots/AddDonorPage.png)

## Donor Added Successfully
![Success](assets/screenshots/DonorAddedSuccesfullyPage.png)

## Search Donors
![Search](assets/screenshots/SearchedDonors.png)

## Edit Donor
![Edit](assets/screenshots/EditOptionVisiblePAge.png)

## Updating Donor
![Updating](assets/screenshots/EditingPage.png)

## Donor Updated
![Updated](assets/screenshots/EditUpdatedPage.png)

## API Testing in Postman
![Postman](assets/screenshots/PostmanDonors.png)

# 🔌 API Testing (Production)

Base URL:

```plaintext
https://blood-bridge-backend-production.up.railway.app
```

---

## 🔐 Login API

**POST** `/auth/login`

```plaintext
https://blood-bridge-backend-production.up.railway.app/auth/login
```

### Request Body:

```json
{
  "username": "testuser",
  "password": "testpass"
}
```

---

## 🔍 Search Donors

```plaintext
GET /donors/search?city=Hyderabad&bloodGroup=A%2B
```

### Full URL:

```plaintext
https://blood-bridge-backend-production.up.railway.app/donors/search?city=Hyderabad&bloodGroup=A%2B
```

### Headers:

```plaintext
Authorization: Bearer <your_token>
```

---

## ➕ Add Donor

```plaintext
POST /donors
```

### Headers:

```plaintext
Content-Type: application/json
Authorization: Bearer <your_token>
```

---

# ⚠️ Important Notes

* Backend may take **20–40 seconds** on first request (Railway cold start)
* H2 database → data resets on restart
* JWT required for protected APIs
* CORS is configured for deployed frontend

---

# 🌍 Deployment Details

* Backend deployed on Railway
* Frontend deployed on Vercel
* Backend URL configured in frontend API calls
* CORS configured to allow frontend domain

---

# 🌟 Future Improvements

* 🐘 PostgreSQL (persistent database)
* 🔐 HttpOnly cookies for JWT
* 📍 Location-based donor filtering
* 📊 Admin dashboard
* 📱 Mobile optimization

---

# 👨‍💻 Author

**Sai Tej**

---

# ⭐ Support

If you like this project, give it a star ⭐ on GitHub!
