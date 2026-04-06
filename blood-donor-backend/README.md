<<<<<<< HEAD
# Blood Donor App 🩸

A Spring Boot backend application for managing blood donors.

## Features
- User Registration & Login
- Donor CRUD Operations
- Search by City, Area, Blood Group
- Availability Tracking
- JWT Authentication
- Secure APIs

## Tech Stack
- Java
- Spring Boot
- Spring Data JPA
- H2 Database

## API Testing (Postman)

### Register
POST /auth/register

Body:
{
  "username": "tej",
  "password": "1234",
  "name": "Tej Sai",
  "bloodGroup": "O+",
  "city": "Hyderabad",
  "area": "Madhapur",
  "location": "Near Metro",
  "available": true
}

### Login
POST /auth/login

Body:
{
  "username": "tej",
  "password": "1234"
}

### Get Donors
GET /donors

### Search Using City
GET /donors/search?city=Hyderabad

### Search Using City&BloodGroup
GET /donors/search?city=Hyderabad&bloodGroup=O%2B

## How to Run 🚀

1. Clone the repository:
   git clone https://github.com/itssaitej/Blood-Donor-App.git

2. Navigate into the project:
   cd Blood-Donor-App

3. Run the application:
   mvn spring-boot:run

4. Server will start at:
   http://localhost:8080

## Database

This project uses H2 in-memory database.

Access H2 Console:
http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password: (leave empty)   

## Future Improvements
- React Frontend
- GPS Location-based search
=======
# 🩸 Blood Bridge App

A full-stack web application to **search and manage blood donors**, built using **React + Spring Boot + JWT Authentication**.

---

## 🚀 Tech Stack

* **Frontend:** React (Create React App)
* **Backend:** Spring Boot
* **Database:** H2 (default) / MySQL (optional)
* **Authentication:** JWT (JSON Web Token)

---

## ✨ Features

* 🔐 Secure Login with JWT Authentication
* 🔍 Search donors by city & blood group
* ➕ Add new donors
* 🔒 Protected routes (only logged-in users can access)
* 💻 Clean and responsive UI

---

## 📁 Project Structure

```
blood-bridge/
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
git clone https://github.com/your-username/blood-bridge.git
cd blood-bridge
```

---

# 🧩 Backend Setup (Spring Boot)

```
cd blood-donor-backend
```

---

## 🗄️ Database Configuration

### ✅ Default (Recommended – No setup required)

The project uses **H2 in-memory database**, so it works instantly.

No changes needed in `application.properties`.

---

### ⚙️ Optional (MySQL Setup)

Update:

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

Server runs at:

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

App runs at:

```
http://localhost:3000
```

---

# 🔐 Authentication Flow

1. User logs in using username & password
2. Backend returns JWT token
3. Token is stored in browser `localStorage`
4. All protected API calls use:

```
Authorization: Bearer <token>
```

---

# 🧪 Testing the Application

---

## 🔹 1. Web App Testing

---

### ▶️ Login

* Open: `http://localhost:3000/login`
* Enter credentials:

```
Username: your_username
Password: your_password
```

---

### 🔍 Search Donors

* Navigate to Search page
* Enter:

  * City (e.g., Hyderabad)
  * Blood Group (e.g., A+)
* Click **Search**
* View matching donors

---

### ➕ Add Donor

* Click **Add Donor**
* Fill:

  * Name
  * City
  * Blood Group
  * Area
  * Location
  * Availability
* Click **Add Donor**
* Success message appears

---

## 🔹 2. API Testing (Postman)

---

### 🔐 Login API

**POST** `/auth/login`

```
http://localhost:8080/auth/login
```

#### Request Body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

#### Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### 🔍 Search Donors API

**GET** `/donors/search`

```
http://localhost:8080/donors/search?city=Hyderabad&bloodGroup=A%2B
```

#### Headers:

```
Authorization: Bearer <your_token>
```

---

### ➕ Add Donor API

**POST** `/donors`

```
http://localhost:8080/donors
```

#### Headers:

```
Content-Type: application/json
Authorization: Bearer <your_token>
```

#### Request Body:

```json
{
  "username": "your_username",
  "name": "Ram",
  "bloodGroup": "B+",
  "city": "Chennai",
  "area": "T Nagar",
  "location": "Near Bus Stand",
  "available": true
}
```

---

# ⚠️ Important Notes

* Backend must be running before frontend
* JWT token is required for all protected APIs
* Default DB is **H2 (no setup required)**
* If using MySQL, update credentials properly
* Do NOT commit `node_modules` or `target` folders

---

# 📸 Screenshots (Optional)

*I shall add screenshots here for better presentation soon*

---

# 👨‍💻 Author

**Sai Tej**

---

# 🌟 Future Improvements

* ✏️ Edit donor
* 🗑️ Delete donor
* 🔔 Toast notifications
* 🌍 Cloud deployment
* 👤 User registration

---

# ⭐ If you like this project

Give it a star on GitHub ⭐
>>>>>>> 8b02736dd995a6ea6e0eb6932699799546b7e2c5
