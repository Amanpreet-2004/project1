import React, { useState } from "react";
import "../Del.css";
import { useNavigate } from "react-router-dom";

function Delete() {
  const [userId, setUserId] = useState("");  
  const navigate = useNavigate();

  function insert(e) {
    setUserId(e.target.value);
  }


  const OnSubmit = async () => {
    if (!userId) {
      alert("Please enter a User ID");
      return;
    }

    const values = {
      userId: userId,  
    };

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
console.log(values);
    try {
      const response = await fetch("http://localhost:8000/delete", config);  
      const data = await response.json();

      if (data.message === "User Deleted Successfully") {
        alert("User deleted successfully.");
        navigate("/Admin");  
      } else {
        alert("Error deleting user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={insert}
        style={{ padding: "8px", margin: "10px 0", borderRadius: "5px" }}
      />
      <button onClick={OnSubmit} style={{ padding: "8px 16px", borderRadius: "5px", backgroundColor: "#f44336", color: "white" }}>
        Delete User
      </button>
    </div>
  );
}

export default Delete;
