import React, { useEffect, useState } from 'react';
import Footer from './Footer';

function LikedProducts() {
  const [like, setLike] = useState([]);

 useEffect(() => {
    fetch('http://localhost:8000/liked')
      .then((response) => response.json())
      .then((data) => {
        setLike(data);
      })
      .catch((error) => {
        console.error('Error fetching liked products:', error);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/int9.jpg" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/LikedProducts">
                  <i className="fa-sharp fa-regular fa-heart"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Product">
                  <i className="fa-duotone fa-solid fa-arrow-rotate-left"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={styles.container}>
        <h1>Liked Products</h1>
        {like && like.length > 0 ? (
          <div style={styles.cardContainer}>
            {like.map((product) => (
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
        ) : (
          <p>No liked products yet.</p>
        )}
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

const styles = {
  container: {
    animation: 'fadeIn 2s ease-out',
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'underline',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '60px',
    color: 'white',
    justifyContent: 'center',
    padding: '60px',
    animation: 'fadeIn 3s ease-out',
  },
  card: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(31, 26, 26, 0.9)',
    backgroundColor: '#34495e',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '8px',
  },
};

export default LikedProducts;



