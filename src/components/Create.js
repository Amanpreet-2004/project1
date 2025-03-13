
import { useContext, useEffect, useState } from "react";
import '../Create.css';
import { useSelector } from 'react-redux';  
import { useNavigate } from "react-router-dom";
import Provider1 from "./Provider1";
import Footer1 from "./Footer1";

function ProductForm() {
  const user = useSelector(state => state);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [pname, setPname] = useState("");

  useEffect(() => {
    setPname(user.username);
  }, [user.username]); 

  const navigate = useNavigate();

  function insertProductId(e) {
    setProductId(e.target.value);
  }

  function insertProductName(e) {
    setProductName(e.target.value);
  }

  function insertProductPrice(e) {
    setProductPrice(e.target.value);
  }

  function insertProductImage(e) {
    setProductImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const onSubmit = async () => {
  
    if (!productId || !productName || !productPrice || !productImage) {
      alert("Please fill out all fields and add an image.");
      return;
    }

   
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("pname", pname);
    formData.append("productImage", productImage);

    const config = {
      method: "POST",
      body: formData,  
    };

    try {
 
      const response = await fetch("http://localhost:8000/product", config);
      const json = await response.json();
      console.log(json);  

  
      if (json.message === "Product added successfully") {
        alert(json.message);
        navigate('/Product1');  
      } else {
        alert(json.message || "Product not added");  
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <>
      <Provider1 />
      <div className="data1">
        <h2>Add New Product</h2>
      </div>

      <form id="productForm">
        <label htmlFor="productId">Enter Product ID:</label>
        <input
          type="text"
          id="productId"
          name="productId"
          value={productId}
          onChange={insertProductId}
          required
        />

        <label htmlFor="productName">Enter Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={insertProductName}
          required
        />

        <label htmlFor="productPrice">Enter Product Price:</label>
        <input
          type="text"
          id="productPrice"
          name="productPrice"
          value={productPrice}
          onChange={insertProductPrice}
          required
        />

        <label htmlFor="productImage">Add Product Image:</label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          onChange={insertProductImage}
          required
        />

        <input type="button" value="Add Product" onClick={onSubmit} />
      </form>
      
      {/* Footer Component */}
      <Footer1 />
    </>
  );
}

export default ProductForm;
