


import { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Add.css';
import '../Admin.css'; 

function Admin() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


 useEffect(() => {
  let value = sessionStorage.getItem("username");
  setName1(value);
  },[]);

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
        setShowModal(true);
        setTimeout(() => {
          navigate("/Users");
          setShowModal(false);
        }, 3000);
      } else {
        console.log("Response not ok:", json);
      }
    } catch (error) {
      console.log("Error during signup");
    }
  };

  return (
    <>
      <div className="admin-container">
        {/* Sidebar */}
        <div className="admin-sidebar">
          <h2 className="admin-sidebar-title">{name1} (Admin)</h2>
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
          <div className="add">
            <h1>Add User By Admin</h1>

            <form id="Information1">
              <label htmlFor="userid">Enter Userid</label>
              <input
                type="text"
                id="userid"
                name="userid"
                value={id}
                onChange={insert1}
                required
              />

              <label htmlFor="username">Enter Username</label>
              <input
                type="text"
                id="name"
                name="username"
                value={name}
                onChange={insert2}
                required
              />

              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={insert3}
                required
              />

              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={insert4}
                required
              >
                <option value="">Choose your role</option>
                <option value="provider">Provider</option>
                <option value="customer">Customer</option>
              </select>

              <input type="button" value="Sign Up" onClick={OnSubmit} />
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>Admin account created successfully!</Modal.Body>
      </Modal>
    </>
  );
}

export default Admin;
