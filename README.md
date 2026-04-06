# 🩸 Blood Bridge App

A full-stack web application to **search, manage, and track blood donors**, built using **React, Spring Boot, and JWT Authentication**.

---

## 🚀 Tech Stack

* **Frontend:** React (Create React App)
* **Backend:** Spring Boot (Java 17)
* **Database:** H2 (in-memory, for development)
* **Authentication:** JWT (JSON Web Token)
* **Build Tool:** Maven
* **Deployment (In Progress):**

  * Backend → Render
  * Frontend → Vercel

---

## ✨ Features

* 🔐 Secure Login & Registration using JWT
* 🔍 Search donors by city & blood group
* ➕ Add new donors
* ✏️ Edit donor details (**owner-only access**)
* 🗑️ Delete donor (**owner-only access**)
* 🔄 Toggle availability with donation tracking logic
* 📅 Donation eligibility system (`lastDonationDate` → `nextEligibleDate`)
* 🔒 Protected routes (JWT-based access)
* 🎯 UI improvements:

  * Hide edit/delete for non-owners
  * Reset edit state on new search

---

## 📁 Project Structure

```
Blood-Bridge/
│
├── blood-donor-backend/     # Spring Boot Backend
├── blood-donor-frontend/    # React Frontend
└── README.md
```

---

## ⚙️ Setup Instructions

---

### 🔹 1. Clone the Repository

```
git clone https://github.com/itssaitej/Blood-Bridge.git
cd Blood-Bridge
```

---

# 🧩 Backend Setup (Spring Boot)

```
cd blood-donor-backend
```

---

## 🗄️ Database Configuration

### ✅ Default (Recommended – No setup required)

* Uses **H2 in-memory database**
* Data resets on server restart

---

### ⚙️ Optional (Production / MySQL)

```
spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
```

---

## ▶️ Run Backend

```
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

# 🌐 Frontend Setup (React)

```
cd blood-donor-frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🔐 Authentication Flow

1. User logs in with username & password
2. Backend returns JWT token
3. Token stored in `localStorage`
4. All API requests include:

```
Authorization: Bearer <token>
```

---

# 🧪 API Endpoints

---

## 🔐 Login

**POST** `/auth/login`

```
http://localhost:8080/auth/login
```

---

## 🔍 Search Donors

**GET** `/donors/search`

```
http://localhost:8080/donors/search?city=Hyderabad&bloodGroup=A%2B
```

---

## ➕ Add Donor

**POST** `/donors`

---

## ✏️ Edit Donor

**PUT** `/donors/{id}`
(Only owner allowed)

---

## 🗑️ Delete Donor

**DELETE** `/donors/{id}`
(Only owner allowed)

---

## 🔄 Toggle Availability

* Automatically updates eligibility dates

---

# ⚠️ Important Notes

* Backend must run before frontend
* JWT required for protected APIs
* H2 DB is **non-persistent**
* Do NOT commit:

  * `target/`
  * `node_modules/`

---

# 🌍 Deployment Status

🚧 Currently deploying:

* Backend → Render
* Frontend → Vercel

(Production URLs will be added soon)

---

# 🌟 Future Improvements

* 🐘 PostgreSQL integration (production DB)
* 🔐 Secure JWT storage (HttpOnly cookies)
* 📍 Location-based donor search
* 📱 Mobile responsiveness improvements
* 📊 Dashboard for donor analytics

---

# 👨‍💻 Author

**Sai Tej**

---

# ⭐ Support

If you like this project, give it a star ⭐ on GitHub!
