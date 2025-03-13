import React, { useState, useEffect } from 'react';
import '../List2.css';
 
import Provider1 from './Provider1';
import Footer1 from './Footer1';


function List() {
  const [data, setData] = useState([]);
 const  [name, setName] = useState('');
  useEffect(() => {
    let value = sessionStorage.getItem("username");
    setName(value);
    fetch('http://localhost:8000/read')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  return (
    <>
    <Provider1 />
    <div className='set'>
      
      <div className='head'>
      <h1>Products</h1>
</div>

     <div className="product-grid">
        {data.filter((user) => user.pname === name).map((user) => (
          <div key={user.productId} className="product-card">
            <img
              src={`http://localhost:8000${user.productImage}`}
              alt={user.productName}
              className="product-image"
            />
            <div className="product-info">
              <h3>{user.productName}</h3>
              <p>Price: ${user.productPrice}</p>
            </div>
          </div>
        ))}
      </div>


    
    </div>
              {/* Footer Component */}
   <Footer1 />
</>
  );
}

export default List;
