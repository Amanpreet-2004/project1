import React from "react";
import { useState } from "react";
import "../Del.css";
import { useNavigate } from "react-router-dom";
function Delete() {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();


  function insert(e) {
    setProductId(e.target.value);
  }

  const OnSubmit = async () => {
    const values = {
      productId: productId,
    };
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    console.log(values);

      const response = await fetch("http://localhost:8000/delete", config);
      const data = await response.json();
      if (data.message === "Product Deleted Successfully") {
        alert("product found");
        
      } else {
        alert("Product Deleted Successfully");
        navigate("/Product1");
      }
   
  };

  return (
   
    <button onClick={OnSubmit}>Delete</button>
  );
}

export default Delete;
