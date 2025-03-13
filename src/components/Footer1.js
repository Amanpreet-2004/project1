import React from 'react';
import '../Footer1.css';

function Footer() {
  return (
    <div className="footer_section1">
      <div className="container1">
        <div className="footer_location_text1">
          <ul>
            <li>
            <i class="fa-solid fa-location-dot"></i> 
              <span className="padding_left_10">
                <a href="#">Interior design </a>
              </span>
            </li>
            <li>
            <i class="fa-solid fa-phone"></i>
              <span className="padding_left_10">
                <a href="#">Call : +7586656566</a>
              </span>
            </li>
            <li>
            <i class="fa-solid fa-envelope"></i>
              <span className="padding_left_10">
                <a href="#">demo@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="row1">
          <div className="col2-lg-3 col-sm-6">
            <h2 className="useful_text">Useful link</h2>
            <div className="footer_menu1">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Our Design</a></li>
                <li><a href="/signup">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col2-lg-3 col-sm-6">
            <h2 className="useful_text4">Repair</h2>
            <p className="lorem_text1">There are several methods of repairing wooden structures such as: removal and replacement, addition of elements, sealing/filling, repair of cracks, and prothesis</p>
          </div>
          <div className="col2-lg-3 col-sm-6">
            <h2 className="useful_text4">Social Media</h2>
            <div id="social1">
              <a className="instaBtn1 smGlobalBtn1 active" href="https://www.instagram.com/accounts/login/"></a>
              <a className="facebookBtn1 smGlobalBtn1" href="https://www.facebook.com/login.php/"></a>
              <a className="twitterBtn1 smGlobalBtn1" href="#"></a>

            </div>
          </div>
        
          
        </div>
      </div>
      
     
     
    </div>
  );
}

export default Footer;
