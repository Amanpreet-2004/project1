import React from 'react';
import Carousel from './Carousel';  
import Footer from './Footer'; 
import { useSelector } from 'react-redux';  
import Navbar from './Navbar';
import About from './About'; 
import Services from './Services';   
import Signup from './Signup';
function Home() { 
  const user = useSelector(state => state); 
  return (
<>
   
    <div>
    {/* <h1>{user.username} Logged In Successfully</h1> */}
      <Navbar />
      <Carousel />  
      <br/>
<hr></hr>
      <Services/>
        <br/>
        <hr></hr>

      <About/>
      
      <hr></hr>
 <Signup/>
       <hr></hr>

      <br/><br/>
      <Footer />  
    </div></>
  );
}

export default Home;
