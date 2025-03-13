import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../Redux/Action/LoginAction';
import '../Login.css';


import Footer from './Footer';
import { Modal} from 'react-bootstrap';


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [userType, setUserType] = useState('');

  function insert2(e) {
    setName(e.target.value);
  }

  function insert3(e) {
    setPassword(e.target.value);
  }

  async function mysubmit() {
    sessionStorage.setItem("username", name);
    const mystate = {
      password: password,
      username: name,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mystate),
    };

    try {
      const response = await fetch("http://localhost:8000/login", config);
      const data = await response.json();

      if (data.message === "provider") {
        setUserType("Provider");
        setMessage(true);
        setShowModal(true);
        setTimeout(() => {
          setMessage(false);
          dispatch(loginUser(mystate));
          navigate('/Product1');
        }, 3000);
      } else if (data.message === "customer") {
        setUserType("Customer");
        setMessage(true);
        setShowModal(true);
        setTimeout(() => {
          setMessage(false);
          dispatch(loginUser(mystate));
          navigate('/Customer');
        }, 3000);
      
      }
      else if (data.message === "admin") {
      
                setUserType("Admin");
                setMessage(true);
                setShowModal(true);
                setTimeout(() => {
                  setMessage(false);
                  dispatch(loginUser(mystate));
                  console.log("Navigating to Admin page");
                  navigate('/Adminpro'); 
                }, 3000);
              }
       else if (data.message === "incorrect password or email") {
        alert('Incorrect password or email');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
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
                <a className="nav-link " href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About1">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="data">
        <h1>Login Form</h1>
      </div>

      <form id="Information">
        <label htmlFor="username">Enter Username</label>
        <input type="text" id="name" name="username" value={name} onChange={insert2} required />

        <label htmlFor="password">Enter Password</label>
        <input type="text" id="password" name="password" value={password} onChange={insert3} required />

        <input type="button" value="Login" onClick={mysubmit} />

        <a href="/Signup" className="link">Sign Up</a>
      </form>
      <br />
      {/* Footer Component */}
      <Footer />

     
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{userType} Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{userType} logged in successfully!</Modal.Body>
      
      </Modal>
    </>
  );
}

