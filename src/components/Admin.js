
import { Link } from "react-router-dom";

import { useEffect ,useState } from 'react';
import '../Admin.css'; 

export default function AdminPage() {
  const [name, setName] = useState('');

    useEffect(() => {
    let value = sessionStorage.getItem("username");
    setName(value);
    },[]);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2 className="admin-sidebar-title">{name} (Admin)</h2>
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
</div>
    
  );
}
