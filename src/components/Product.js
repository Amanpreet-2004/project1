// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'; 
// import { useSelector } from 'react-redux';
// import Footer from './Footer';
// import '../List.css';

// function List1() {  
//   const user = useSelector(state => state); 
//   console.log(user.username);  

//   const [data, setData] = useState([]);  
//   const [likedProducts, setLikedProducts] = useState([]);  
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//    const  [name, setName] = useState('');  
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     let value = sessionStorage.getItem("username");
//     setName(value);
//     const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
//     setLikedProducts(storedLikedProducts);


//     fetch('http://localhost:8000/read')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);


//   const handleToggleLike = async (id, img, price, name) => {
  
//     const isAlreadyLiked = likedProducts.some(item => item.productId === id);

 
//     const updatedLikedProducts = isAlreadyLiked
//       ? likedProducts.filter(item => item.productId !== id) 
//       : [...likedProducts, { productId: id, productImage: img, productPrice: price, productName: name }];  

  
//     localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));

 
//     setLikedProducts(updatedLikedProducts);

   
//     const values = {
//       cname: name,
//       productId: id,
//       productImage: img,
//       productPrice: price,
//       productName: name,
//     };

//     const config = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     };

//     try {
//       const response = await fetch("http://localhost:8000/like", config);
//       const data = await response.json();
//       console.log(data);  
//     } catch (error) {
//       console.error('Error toggling like:', error);
//     }
//   };

//   const handleShowProductDetails = (product) => {
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//   };

 
//   const handleCancelDetails = () => {
//     setIsModalOpen(false);
//     setCurrentProduct(null);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img src="/int9.jpg" alt="Logo" />
//           </a>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="/LikedProducts"><i className="fa-sharp fa-regular fa-heart"></i></a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/Product"><i className="fa-duotone fa-solid fa-arrow-rotate-left"></i></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//       <div>
//         <div className="h">
//           <h1>Products</h1>
//         </div>
//         <div style={styles.cardContainer}>
//           {data.map((product) => (
//             <div key={product.productId} style={styles.card}>
//               <div style={styles.buttonsContainer}>
//                 <button 
//                   onClick={() => handleToggleLike(product.productId, product.productImage, product.productPrice, product.productName)} 
//                   style={styles.likeButton}
//                 >
//                   {likedProducts.some(item => item.productId === product.productId) ? (
//                     <i
//                       className="fa-sharp fa-solid fa-heart"
//                       style={{
//                         fontSize: '22px',
//                         color: 'red', 
//                         cursor: 'pointer',
//                         borderRadius: '50%',
//                         transition: 'color 0.3s ease',
//                       }}
//                     ></i>
//                   ) : (
//                     <i
//                       className="fa-regular fa-heart"
//                       style={{
//                         fontSize: '20px',
//                         color: 'gray', 
//                         cursor: 'pointer',
//                         borderRadius: '50%',
//                         transition: 'color 0.3s ease',
//                       }}
//                     ></i>
//                   )}
//                 </button>
//                 <button onClick={() => handleShowProductDetails(product)} style={styles.detailsButton}>
//                   <i className="fa-sharp fa-solid fa-circle-info"></i>
//                 </button>
//               </div>
//               <img
//                 src={`http://localhost:8000${product.productImage}`}
//                 alt={product.productName}
//                 style={styles.productImage}
//               />
//               <h3>{product.productName}</h3>
//               <p><strong>Price:</strong> ${product.productPrice}</p>
//             </div>
//           ))}
//         </div>

//         {isModalOpen && currentProduct && (
//           <div style={modalStyles.overlay}>
//             <div style={modalStyles.modal}>
//               <h2>Product Details</h2>
//               <p><strong>Product ID:</strong> {currentProduct.productId}</p>
//               <p><strong>Product Name:</strong> {currentProduct.productName}</p>
//               <p><strong>Product Price:</strong> ${currentProduct.productPrice}</p>
//               <img
//                 src={`http://localhost:8000${currentProduct.productImage}`}
//                 alt={currentProduct.productName}
//                 style={{ width: "300px" }}
//               />
//               <div>
//                 <button onClick={handleCancelDetails}>Close</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer Component */}
//       <Footer />
//     </>
//   );
// }

// const styles = {
//   cardContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "30px",
//     color: "white",
//     justifyContent: "center",
//     padding: "20px",
//   },

//   card: {
//     position: "relative",
//     width: "300px",
//     padding: "15px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     textAlign: "center",
//     boxShadow: "0 4px 8px rgba(20, 16, 10, 0.9)",
//     backgroundColor: "#34495e",
//   },
//   buttonsContainer: {
//     position: "absolute",
//     top: "10px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "flex",
//     justifyContent: "space-between",
//     width: "80%",
//   },
//   likeButton: {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   detailsButton: {
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     padding: "5px 10px",
//     cursor: "pointer",
//   },
//   productImage: {
//     width: "100%",
//     height: "250px",
//     objectFit: "cover",
//     marginBottom: "10px",
//   },
// };

// const modalStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modal: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "600px",
//     textAlign: "center",
//   },
// };

// export default List1;
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import Footer from './Footer';
import '../List.css';

function List1() {  
  
  const [data, setData] = useState([]);  
  const [likedProducts, setLikedProducts] = useState([]);  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [name, setName] = useState('');  
  const navigate = useNavigate(); 

  useEffect(() => {
    let value = sessionStorage.getItem("username");
    setName(value);
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
  }, []);

  const handleToggleLike = async (id, img, price, name1,pname) => {
    const isAlreadyLiked = likedProducts.some(item => item.productId === id);

    const updatedLikedProducts = isAlreadyLiked
      ? likedProducts.filter(item => item.productId !== id) 
      : [...likedProducts, { productId: id, productImage: img, productPrice: price, productName: name }];

    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    setLikedProducts(updatedLikedProducts);

    const values = {
      cname: name,
      productId: id,
      productImage: img,
      productPrice: price,
      productName: name1,
      pname: pname,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    try {
      const response = await fetch("http://localhost:8000/like", config);
      const data = await response.json();
      console.log(data);  
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleShowProductDetails = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleCancelDetails = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleBooking = (productId) => {
    console.log(`Booking product with ID: ${productId}`);
  
    navigate(`/booking/${productId}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/int9.jpg" alt="Logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/LikedProducts"><i className="fa-sharp fa-regular fa-heart"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Product"><i className="fa-duotone fa-solid fa-arrow-rotate-left"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div>
        <div className="h">
          <h1>Products</h1>
        </div>
        <div style={styles.cardContainer}>
          {data.map((product) => (
            <div key={product.productId} style={styles.card}>
              <div style={styles.buttonsContainer}>
                <button 
                  onClick={() => handleToggleLike(product.productId, product.productImage, product.productPrice, product.productName,product.pname)} 
                  style={styles.likeButton}
                >
                  {likedProducts.some(item => item.productId === product.productId) ? (
                    <i
                      className="fa-sharp fa-solid fa-heart"
                      style={{
                        fontSize: '22px',
                        color: 'red', 
                        cursor: 'pointer',
                        borderRadius: '50%',
                        transition: 'color 0.3s ease',
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      style={{
                        fontSize: '20px',
                        color: 'gray', 
                        cursor: 'pointer',
                        borderRadius: '50%',
                        transition: 'color 0.3s ease',
                      }}
                    ></i>
                  )}
                </button>
                <button onClick={() => handleShowProductDetails(product)} style={styles.detailsButton}>
                  <i className="fa-sharp fa-solid fa-circle-info"></i>
                </button>
                
              </div>
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

      {/* Footer Component */}
      <Footer />
    </>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    color: "white",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    position: "relative",
    width: "300px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(20, 16, 10, 0.9)",
    backgroundColor: "#34495e",
  },
  buttonsContainer: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  likeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  detailsButton: {
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  bookingButton: {
    color: "white",
    backgroundColor: "#f39c12",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
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
