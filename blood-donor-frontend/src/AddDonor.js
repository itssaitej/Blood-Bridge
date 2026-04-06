import React, { useState } from "react";

function AddDonor() {
  console.log("ADD DONOR COMPONENT LOADED");
  const [form, setForm] = useState({
  name: "",
  city: "",
  bloodGroup: "",
  area: "",        
  location: "",    
  available: true
});

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

 const handleSubmit = async (e) => {
  console.log("SUBMIT CLICKED");
  e.preventDefault();

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username"); // ✅ ADD THIS
 
  try {
    const response = await fetch("http://localhost:8080/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ...form,
        username: username // ✅ VERY IMPORTANT
      })
    });

    if (!response.ok) {
      throw new Error("Failed to add donor");
    }

    setMessage("✅ Donor added successfully!");

    setForm({
      name: "",
      city: "",
      bloodGroup: "",
      area: "",
      location: "",   // ✅ FIXED
      available: true
    });

  } catch (err) {
    setMessage("❌ " + err.message);
  }
};

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Add Donor</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="input"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            className="input"
            name="bloodGroup"
            placeholder="Blood Group (A+, B+)"
            value={form.bloodGroup}
            onChange={handleChange}
          />

          <input
            className="input"
            name="area"
            placeholder="Area (e.g., Amberpet)"
            value={form.area}
            onChange={handleChange}
          />
           
          <input
            className="input"
            name="location"
            placeholder="Location (e.g., Near OU Gate)"
            value={form.location}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
            />
            Available
          </label>

          <button className="button" type="submit">
            Add Donor
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default AddDonor;