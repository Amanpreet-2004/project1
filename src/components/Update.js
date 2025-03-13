import React, { useState, useEffect } from 'react';
import '../Update.css';

import Provider1 from './Provider1';
import Footer1 from './Footer1';
import Update1 from './Update1';

function List() {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [action, setAction] = useState(null); 
   const [name, setName] = useState(''); 

  useEffect(() => {
    let value = sessionStorage.getItem("username");
    setName(value);
    fetch('http://localhost:8000/read')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const handleActionClick = (product, actionType) => {
    setSelectedProduct(product);
    setAction(actionType);
  };

  const handleDeleteProduct = async (productId) => {
    console.log('Deleting product with ID:', productId);

 
    const updatedData = data.filter((product) => product.productId !== productId);
    setData(updatedData);

    try {
   
      const response = await fetch('http://localhost:8000/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

     
      alert('Product Deleted');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product');
    }
  };

  return (
    <>
      <Provider1 />
      <div className='set'>
        <div className='head'>
          <h1>Update & Delete</h1>
        </div>

       
        {selectedProduct && action === 'update' && <Update1 product={selectedProduct} />}

        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {data.filter(((user)=>user.pname===name))
            .map((user) => (
              <tr key={user.productId}>
                <td>{user.productId}</td>
                <td>
                  <img
                    src={`http://localhost:8000${user.productImage}`}
                    alt={user.productName}
                    className="product-image"
                    style={{ width: '70px', height: '70px' }}
                  />
                </td>
                <td>{user.productName}</td>
                <td>${user.productPrice}</td>
                <td>
             
                  <button
                    onClick={() => handleActionClick(user, 'update')}
                  >
                    Update
                  </button>
                 
                  <button
                    onClick={() => handleDeleteProduct(user.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Component */}
      <Footer1 />
    </>
  );
}

export default List;
