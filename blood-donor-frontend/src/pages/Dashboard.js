import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {name} 👋</h2>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => navigate("/search")} style={styles.button}>
          Search Donors
        </button>

        <button onClick={() => navigate("/add")} style={styles.button}>
          Add Donor
        </button>
      </div>
    </div>
  );
}

const styles = {
  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "crimson",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Dashboard;