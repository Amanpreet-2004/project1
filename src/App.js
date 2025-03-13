import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';  
import Login from './components/Login'; 
import Home from './components/Home'; 
import About  from './components/About';
import Add from './components/Add';
import About1 from './components/About1';
import Adminpro from './components/Adminpro';
import Admin from './components/Admin';
import Users from './components/Users';
import Signup from './components/Signup'; 
import Services from './components/Services';
import Customer from './components/Customer';
import Provider1 from './components/Provider1'; 
import Create from './components/Create';
import Notification from './components/Notification';
import Product from './components/Product';
import Service from './components/Service';
import Update from './components/Update';
import Update1 from './components/Update1';
import Delete from './components/Delete';
import Deluser from './components/Deluser';
import Gallery from './components/Gallery';
import Book from './components/Book';
import {Provider} from "react-redux";
import Store from './Redux/Store/Store';
import Product1 from './components/Product1';
import LikedProducts from './components/LikedProducts';


function App() {
  return (
  <>
  
      <Navbar /> 
      <Provider store={Store}>
     
      <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/signup" element={<Signup />} /> 
         <Route path="/about" element={<About />} />
         <Route path="/about1" element={<About1 />} />
         <Route path="/Admin" element={<Admin />} />
         <Route path ="/Add" element ={<Add />}/>
         <Route path="/Adminpro" element={<Adminpro />} />
       <Route path="/login" element={<Login />} />  
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Provider1" element={<Provider1 />} />
         <Route path="/create" element={<Create />} /> 
         <Route path="/product1" element ={<Product1 />} /> 
         <Route path ="/update" element ={<Update />} />
         <Route path ="/update1" element ={<Update1 />} />
         <Route path ="/product" element = {<Product />} />
         <Route path ="/users" element = {<Users />} />
        <Route path ="/delete" element ={<Delete />} />
        <Route path ="/book" element ={<Book />} />
        <Route path ="/notification" element ={<Notification />} />
        <Route path ="/deluser" element ={<Deluser />} />
        <Route path ="/gallery" element={<Gallery />} />
        <Route path="/store" element ={<Store /> } />
        <Route path ="/likedProducts" element ={<LikedProducts />} />
        <Route path ="/service" element ={<Service />} />
     
      </Routes>
    
      </Provider>
   </>
  );
}

export default App;
