// import React from 'react';
// import '../Footer.css';

// function Footer() {
//   return (
    
       

//         <div className="footer_section">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3 col-sm-6">
//                 <h2 className="useful_text">Useful link</h2>
//                 <div className="footer_menu">
//                   <ul>
//                     <li><a href="index.html">Home</a></li>
//                     <li><a href="about.html">About</a></li>
//                     <li><a href="design.html">Our Design</a></li>
//                     <li><a href="contact.html">Contact Us</a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-sm-6">
//                 <h2 className="useful_text">Repair</h2>
//                 <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//               <div className="col-lg-3 col-sm-6">
//                 <h2 className="useful_text">Social Media</h2>
//                 <div id="social">
//                   <a className="instabtn smGlobalBtn active" href="https://www.instagram.com/accounts/login/" aria-label="Instagram"></a>
//                   <a className="facebookbtn smGlobalBtn" href="https://www.facebook.com/login.php/" aria-label="Facebook"></a>
//                   <a className="twitterBtn smGlobalBtn" href="#" aria-label="Google Plus"></a>
//                 </div>
//               </div>
//               <div className="col-sm-6 col-lg-3">
//                 <h1 className="useful_text">Our Repair Center</h1>
//                 <p className="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import '../Footer.css';

function Footer() {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="footer_location_text">
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
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Useful link</h2>
            <div className="footer_menu">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Our Design</a></li>
                <li><a href="/signup">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Repair</h2>
            <p className="lorem_text">There are several methods of repairing wooden structures such as: removal and replacement, addition of elements, sealing/filling, repair of cracks, and prothesis</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Social Media</h2>
            <div id="social">
              <a className="instaBtn smGlobalBtn active" href="https://www.instagram.com/accounts/login/"></a>
              <a className="facebookBtn smGlobalBtn" href="https://www.facebook.com/login.php/"></a>
              <a className="twitterBtn smGlobalBtn" href="#"></a>

            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h1 className="useful_text1">Common types of Wood Repair</h1>
            <p className="footer_text">Sanding and Refinishing <br/>Wood Putty and Filler</p>
          </div>
        </div>
      </div>
      
      {/* Footer section end */}
     
    </div>
  );
}

export default Footer;
