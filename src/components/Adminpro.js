
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'; 
import Footer1 from './Footer1';

function List1() {
  const [data, setData] = useState([]);  
  const [likedProducts, setLikedProducts] = useState([]);  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); 
  const [name, setName] = useState(""); 
  const navigate = useNavigate(); 
  const currentUserId = "exampleUserId"; 

  useEffect(() => {
    const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedProducts(storedLikedProducts);

    fetch('http://localhost:8000/read')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    
    const storedName = sessionStorage.getItem("username") || "Admin";  
    setName(storedName);
  }, []);

  const goToLikedProducts = () => {
    navigate('/LikedProducts', { state: { likedProducts } });
  };

  const handleToggleLike = (product) => {
    const updatedLikedProducts = likedProducts.some(item => item.productId === product.productId)
      ? likedProducts.filter(item => item.productId !== product.productId)
      : [...likedProducts, product];

    setLikedProducts(updatedLikedProducts);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));

    fetch('http://localhost:8000/updateLikedProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: currentUserId,  
        likedProducts: updatedLikedProducts,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Liked products updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error updating liked products:', error);
      });
  };

  const handleShowProductDetails = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleCancelDetails = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  return (
    <>
      <div className="admin-container">
        {/* Sidebar */}
        <div className="admin-sidebar">
          <h2 className="admin-sidebar-title">{name} (Admin)</h2> 
          <ul className="admin-sidebar-links">
            <li>
              <Link to="/Users"><i class="fa-solid fa-users"></i> Users</Link>
            </li>
            <li>
              <Link to="/Add"><i class="fa-solid fa-user-plus"></i> Add User</Link>
            </li>
            <li>
              <Link to="/Adminpro"><i class="fa-solid fa-couch"></i> Products</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="admin-main-content">
        <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/int9.jpg" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
            <li className="nav-item">
              <a className="nav-link " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about1">About</a>
            </li>
            </ul></div></div></nav>

          <div className="h">
            <h1>Products</h1>
          </div>

          <div style={styles.cardContainer}>
            {data.map((product) => (
              <div key={product.productId} style={styles.card}>
                <img
                  src={`http://localhost:8000${product.productImage}`}
                  alt={product.productName}
                  style={styles.productImage}
                />
                <h3>{product.productName}</h3>
                <p><strong>Price:</strong> ${product.productPrice}</p>
                
                
                
              </div>
            ))}
          </div>

          {isModalOpen && currentProduct && (
            <div style={modalStyles.overlay}>
              <div style={modalStyles.modal}>
                <h2>Product Details</h2>
                <p><strong>Product ID:</strong> {currentProduct.productId}</p>
                <p><strong>Product Name:</strong> {currentProduct.productName}</p>
                <p><strong>Product Price:</strong> ${currentProduct.productPrice}</p>
                <img
                  src={`http://localhost:8000${currentProduct.productImage}`}
                  alt={currentProduct.productName}
                  style={{ width: "300px" }}
                />
            
                <div>
                  <button onClick={handleCancelDetails}>Close</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Component */}
      <Footer1 />
    </>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    color: "white",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    width: "350px",
    padding: "15px",
    marginLeft: "5%",
  border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(20, 16, 10, 0.9)",
    backgroundColor: "#34495e",
  },
  productImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "600px",
    textAlign: "center",
  },
};

export default List1;
