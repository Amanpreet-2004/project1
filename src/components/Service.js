import React from 'react';
import '../Services.css';
import Footer from './Footer';


function Services() {
  return (
    <>
    <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h1>
        Some Of Our Awesome Interior Designing Projects
        </h1>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int4.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Panel Design
              </h5>
              <p>
              Wall panelling works well in most rooms and can be made from a variety of different materials and finishes.
              </p>
            
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int8.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
             Designs
              </h5>
              <p>
              Different types of wood for interior design play a vital role in shaping the overall look and feel of a home. Woods can be cost-effective.
              </p>
            
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int7.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
       Hall Decoration
              </h5>
              <p>
              Want to design your hall with traditional woodwork in the hall! Here is a design which surely would remind you of the ancient fire sidewalls. 
              </p>
             
            </div>
          </div>
</div>
          <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int10.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
              Hall Decoration
              </h5>
              <p>
              The hall gets a live look when given woodwork designs for hall. The hall is decorated with contemporary designs .
              </p>
             
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int5.png" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
              Dining Room
              </h5>
              <p>
              Dining room design is a part of interior design opted by the ones who need styles, trends and beautiful interior in their house.
              </p>
             
            </div>
          </div>
      </div>
    
      <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="int2.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
              Sofa's and Tables
              </h5>
              <p>
              A modern wooden sofa design has become increasingly popular for homeowners. It is a perfect blend of style and comfort.
              </p>
       
            </div>
          </div>
    </div>

</div>
</div>
  </section>
   {/* Footer Component */}
   <Footer />
  </>
  );
};

export default Services;