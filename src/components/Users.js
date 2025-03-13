import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../User.css';
import '../Admin.css';  
import Footer1 from './Footer1';


export default function Users() {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        let value = sessionStorage.getItem("username");
        setName(value);

        fetch('http://localhost:8000/users')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const OnSubmit = async (userId) => {
        const values = {
            userid: userId,  
        };

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        };

        try {
            const response = await fetch("http://localhost:8000/del", config); 
            const data2 = await response.json();

            if (data2.message === "User Deleted Successfully") {
                alert("User deleted successfully");
                setData(prevData => prevData.filter(user => user.userid !== userId));
            } else {
                alert("Error occurred");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("An error occurred while deleting the user.");
        }
    };

    return (<>
        <div className="admin-container">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <h2 className="admin-sidebar-title">{name} (Admin)</h2>
                <ul className="admin-sidebar-links">
                    <li>
                        <Link to="/Users"> <i class="fa-solid fa-users"></i> Users</Link>
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
                <h2 className="use">List of Users</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.userid}>
                                <td>
                                    <img 
                                        src="https://img.freepik.com/premium-vector/realistic-3d-person-icon-illustration_598594-341.jpg?w=740" 
                                        alt="user" 
                                        className="user-image" 
                                        width="50" 
                                        height="50" 
                                    />
                                </td>
                                <td>{user.userid}</td>
                                <td>{user.username}</td>
                                <td>{user.type}</td>
                                <td>
                                    <button onClick={() => OnSubmit(user.userid)}>Delete</button>  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
          {/* Footer Component */}
      <Footer1 /> </>
    );
   
}

