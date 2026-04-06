import React from "react";
import { useNavigate } from "react-router-dom";



const Navbar = ({ isLoggedIn, handleLogout, username }) => {

    const navigate = useNavigate();
const name = localStorage.getItem("name");
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🩸 Blood Bridge</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  {isLoggedIn ? (
    <>
      <span>👤 {name || "User"}</span>

          <button
            style={styles.button}
            onClick={() => navigate("/dashboard")}
            >
            Home
          </button>

          
          
          <button
          style={styles.button}
          onClick={() => {
          handleLogout();
          navigate("/login");}}>
          Logout
          </button>
          </>
        ) : (<span style={styles.loginText}>Please Login</span>)}
      
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d32f2f",
    padding: "10px 20px",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  button: {
    padding: "6px 12px",
    border: "none",
    backgroundColor: "white",
    color: "#d32f2f",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  loginText: {
    fontStyle: "italic",
  },
};

export default Navbar;