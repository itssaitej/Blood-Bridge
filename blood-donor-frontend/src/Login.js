import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) 
{
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  //const [name, setName] = useState("");
  const [password, setPassword] = useState("");
//const name = localStorage.getItem("name");
const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/dashboard");;
    }
  }, []);

  const handleLogin = async () => {
  try {
    const response = await fetch(
      "https://blood-bridge-backend-production.up.railway.app/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      }
    );

    const data = await response.json();

    // 🚨 Check login success
    if (!response.ok) {
      setError(data.error || "Invalid username or password");
        setLoading(false);
        return;
    }

    // ✅ Save only on success
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("name", data.name || data.username);

    setIsLoggedIn(true);
   setMessage("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

  } catch (error) {
   setError("Server error. Please try again.");
      setLoading(false);
  }
};
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    handleLogin();
  };

  return (
    <div className="container">
    <div className="card">
    <h2 className="title">Login</h2>

        {message && (
          <div className="success-box">{message}</div>
        )}

        {error && (
          <div className="error-box">{error}</div>
        )}
    
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" type="submit">
        Login
      </button>
    </form>
           <p>
       Don't have an account?{" "}
      <span
         style={{ color: "blue", cursor: "pointer" }}
         onClick={() => navigate("/register")}
      >
        Register here
      </span>
    </p>
    </div>
    </div>
  );
}

const styles = {
  card: {
    margin: "20px auto",
    padding: "20px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px"
  },
  input: {
    display: "block",
    width: "90%",
    margin: "10px auto",
    padding: "8px"
  },
  button: {
    padding: "10px",
    backgroundColor: "crimson",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Login;
