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
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/dashboard");;
    }
  }, []);

  const handleLogin = async () => {
    
    const response = await fetch("https://blood-bridge-backend-production.up.railway.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      alert("Login failed: " + text);
      return;
    }

    localStorage.setItem("token", data.token);
localStorage.setItem("username", data.username);
localStorage.setItem("name", data.name);

     setIsLoggedIn(true);
     navigate("/dashboard");;

    alert("Login successful!");
    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    handleLogin();
  };

  return (
    <div className="container">
    <div className="card">
    <h2 className="title">Login</h2>

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
