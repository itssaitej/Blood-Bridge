import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    bloodGroup: "",
    city: "",
    area: "",
    location: "",
    available: true,
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://blood-bridge-backend-production.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(data.error || data.message || "❌ Registration failed");
      }
    } catch (error) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>
          Available:
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Register;
