
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../Signup.css';

function Signup() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [userType, setUserType] = useState('');
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  function insert1(e) {
    setId(e.target.value);
  }

  function insert2(e) {
    setName(e.target.value);
  }

  function insert3(e) {
    setPassword(e.target.value);
  }

  function insert4(e) {
    setRole(e.target.value);
  }

  const OnSubmit = async () => {
    const values = {
      userid: id,
      username: name,
      password: password,
      type: role
    };
    console.log(values);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    try {
      const response = await fetch("http://localhost:8000/ji", config);
      const json = await response.json();
      console.log(json);



      if (response.ok) {
       
        if (role === "provider") {
         
        } else if (role === "customer") {

        } else if (role === "admin") {

        } 
        
      } else {
        console.log("Response not ok:", json);
      }
    } catch (error) {
      console.log("Error during signup");
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
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Signup</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
      <div className="imgs">
        <h1>SignUp</h1>
     

      <form id="Information">
        <label htmlFor="userid">Enter Userid</label>
        <input type="text" id="userid" name="userid" value={id} onChange={insert1} required />

        <label htmlFor="username">Enter Username</label>
        <input type="text" id="name" name="username" value={name} onChange={insert2} required />

        <label htmlFor="password">Enter password</label>
        <input type="password" id="password" name="password" value={password} onChange={insert3} required />

        <label htmlFor="role">Choose your role</label>
        <select id="role" name="role" value={role} onChange={insert4} required>
          <option value="">Choose your role</option>
          <option value="provider">Provider</option>
          <option value="customer">Customer</option>
<option value = "admin">Admin</option>
        </select>

        <input type="button" value="Sign Up" onClick={OnSubmit} />
        <a href="/Login" className="link">Login</a>
      </form>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{userType} Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{userType} logged in successfully!</Modal.Body>
      
      </Modal>
    </>
  );
}

export default Signup;


