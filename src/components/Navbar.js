import React from 'react';
import '../Navbar.css';



function Navbar() {

  return (
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
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Sign Up</a>
            </li>
          
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


