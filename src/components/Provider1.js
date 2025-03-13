
import React from 'react';
import { useEffect ,useState } from 'react';
import { useSelector } from 'react-redux';  
import { Link, useNavigate } from 'react-router-dom'; 
import '../Provider.css';

function Provider() {

  
 
  const [data, setData] = useState([]);
  const [ newdata, setNewdata] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/liked')
    .then((response)=>response.json())
    .then((data1)=>{
      setData(data1);
    })
  },[])
  useEffect(()=>{
    setNewdata((data.filter((item)=>item.pname===name)));
  },[data])
  const [name, setName] = useState('');


  useEffect(() => {
  let value = sessionStorage.getItem("username");
  setName(value);
  },[]);
  return (
    <div className="provider-container">
      <div className='hh'><h1>{name} Logged In Successfully.</h1></div>
      

      <nav className="nav">
        <ul>
          <li>
            <h3 style={{ color: "#f39c12" }}>Welcome! {name}</h3>
          </li>
          <li>
            <Link to="/create"><i class="fa-sharp fa-solid fa-plus"></i> Create</Link>
          </li>
          <li>
          
            <Link to="/Product1"> <i class="fa-solid fa-couch"></i> Products</Link>
          </li> 
          <li>
            <Link to="/update"><i class="fa-solid fa-pen-to-square"></i> Update &  <br/> <i class="fa-solid fa-trash"></i>      Delete</Link>
          </li>
        
          <li>
            <Link to="/notification"><i class="fa-sharp fa-solid fa-bell"></i><sup>{newdata.length}</sup> Notification</Link>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Provider;
