import React, { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [editingDonor, setEditingDonor] = useState(null);
  const loggedInUser = localStorage.getItem("username");
  const searchDonors = async () => {
  const token = localStorage.getItem("token");
  
  setLoading(true);
  setError("");
  setSearched(true);
  setEditingDonor(null);
  try {
    const delay = new Promise((resolve) => setTimeout(resolve, 3000));

    const fetchData = fetch(
      `http://localhost:8080/donors/search?city=${encodeURIComponent(city)}&bloodGroup=${encodeURIComponent(bloodGroup)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // Wait for BOTH: API + 3 sec delay
    const [response] = await Promise.all([fetchData, delay]);

    if (!response.ok) {
      throw new Error("Failed to fetch donors");
    }

    const data = await response.json();
    setDonors(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDonors();
  };

  const handleEdit = (donor) => {
  setEditingDonor(donor);
};

const handleUpdate = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `http://localhost:8080/donors/${editingDonor.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editingDonor)
      }
    );

    if (response.ok) {
      const updated = await response.json();

      setDonors((prev) =>
        prev.map((d) => (d.id === updated.id ? updated : d))
      );

      setEditingDonor(null);
      alert("Donor updated successfully");
    } else {
      alert("Update failed (maybe not owner?)");
    }
  } catch (err) {
    console.error(err);
  }
};

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this donor?");
  const token = localStorage.getItem("token");
  if (!confirmDelete) return;

  try {
    const response = await fetch(`http://localhost:8080/donors/${id}`, {
      method: "DELETE",
      headers: 
      {
        Authorization: `Bearer ${token}` 
      }
    });

    if (response.ok) {
      alert("Donor deleted successfully");

      // ✅ Refresh UI (IMPORTANT)
      setDonors((prev) => prev.filter((d) => d.id !== id));
    } else {
      alert("Failed to delete donor");
    }
  } catch (error) {
    console.error(error);
    alert("Error deleting donor");
  }
};

  return (
    
  <div className="container">
    <div className="card">
      <h2 className="title">Search Donors</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          className="input"
          placeholder="Blood Group (A+, B+, etc)"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        />

        <button className="button" type="submit">
          Search
        </button>
      </form>

      {/* 🔵 Loading */}
      {loading && <p style={{ color: "blue" }}>Searching donors...</p>}

      {/* 🔴 Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ⚠️ No results */}
      {!loading && searched && donors.length === 0 && !error && (
        <p>No donors found</p>
      )}

        {/* 🔥 EDIT FORM */}
        {editingDonor && (
          <div style={{ marginTop: "20px" }}>
            <h3>Edit Donor</h3>

            <input
              value={editingDonor.name}
              onChange={(e) =>
                setEditingDonor({ ...editingDonor, name: e.target.value })
              }
            />

            <input
              value={editingDonor.city}
              onChange={(e) =>
                setEditingDonor({ ...editingDonor, city: e.target.value })
              }
            />

            <input
              value={editingDonor.location}
              onChange={(e) =>
                setEditingDonor({ ...editingDonor, location: e.target.value })
              }
            />
            <label style={{ display: "block", marginTop: "10px" }}>
               Available:
              <input
                 type="checkbox"
                 checked={editingDonor.available}
                 onChange={(e) =>
                setEditingDonor({
                 ...editingDonor,
                 available: e.target.checked
                })
                }  
              />
            </label>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setEditingDonor(null)}>Cancel</button>
          </div>
        )}

      {/* ✅ Results */}
      <div className="results">
        {donors.map((d) => (
          <div key={d.id} className="donor-card">
            <h3>{d.name}</h3>
            <p><strong>Blood Group:</strong> {d.bloodGroup}</p>
            <p><strong>City:</strong> {d.city}</p>
            <p><strong>Location:</strong> {d.location}</p>
            <p>
              <strong>Status:</strong>{" "}
              {d.available ? "Available ✅" : "Not Available ❌"}
            </p>
              {d.lastDonationDate && (
               <p><strong>Last Donation:</strong> {d.lastDonationDate}</p>
              )}

              {d.nextEligibleDate && (
               <p><strong>Eligible Again On:</strong> {d.nextEligibleDate}</p>
              )}
            <button
              className="delete-btn"
              onClick={() => handleDelete(d.id)}>
              Delete ❌
            </button>
            {d.user?.username === loggedInUser && (
            <button onClick={() => handleEdit(d)}>Edit ✏️</button>)}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

const styles = {
  card: {
    margin: "20px auto",
    padding: "20px",
    width: "400px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "center"
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
  },
  results: {
    marginTop: "20px"
  },
  donorCard: {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left"
  }

  

};

export default Search;