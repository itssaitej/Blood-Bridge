import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./Login";
import Search from "./Search";
import "./App.css";
import AddDonor from "./AddDonor";
import Register from "./Register";
//import { useNavigate } from "react-router-dom";

function App() {

 

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
  
  const username = localStorage.getItem("username");

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username"); 
  setIsLoggedIn(false);
};

  return (
    
    <div>
      {isLoggedIn && (
      <Navbar
       isLoggedIn={isLoggedIn}
       handleLogout={handleLogout}
       username={username}
      />
    )}
      
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
           path="/dashboard"
           element={
           isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
         }
        />

        <Route
          path="/"
          element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }  
        />
        {/* Login Route */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/*Adding Route*/}
        <Route
         path="/add"
         element={
         isLoggedIn ? <AddDonor /> : <Navigate to="/login" />
          }
        />
        
        {/* Protected Search Route */}
        <Route
          path="/search"
          element={
            isLoggedIn ? <Search /> : <Navigate to="/login" />
          }
        />

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}


const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial"
  },
  title: {
    color: "crimson"
  },
  logout: {
    marginBottom: "20px",
    padding: "8px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;
