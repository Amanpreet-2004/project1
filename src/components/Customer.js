
import React, { useState, useEffect } from 'react';
import '../Customer.css'; 
import { useSelector } from 'react-redux';  
import Product from './Product';

function Customer() {
  const user = useSelector(state => state); 
  console.log(user);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [name, setName] = useState('');
  

  useEffect(() => {
    let value = sessionStorage.getItem("username");
    setName(value);
    if (!localStorage.getItem('popupShown')) {
      setIsPopupOpen(true);
      localStorage.setItem('popupShown', 'true'); 
    }


    const timeout = setTimeout(() => {
      setIsPopupOpen(false); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []); 

  return (
    <>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <h1>Customer Logged In Successfully</h1>
            <h3 style={{ color: "#34495e" }}>Welcome! {name}</h3>
          </div>
        </div>
      )}

      {/* Product Component */}
      <Product />
    </>
  );
}

export default Customer;
