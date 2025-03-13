import React from 'react';
import '../About.css';
function About() {
  return (
    <>
    <div className="about_section layout_padding">
      <div className="container">
        <div className="about_section_2">
          <div className="row1">
            <div className="col-md-6">
              <div className="image_2">
                <img src="int5.png" alt="About Us" />
              </div>
<br/><br/><br/>
              <div className="image_2">
                <img src="int1.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="about_taital">About Us</h1>
              <p className="about_text">
              Interior design goes far beyond choosing pretty furniture and paint colors; it's the art and science of crafting spaces that are not only visually appealing but also functional and comfortable.
              </p>
              
              <div className="readmore_bt">
                <a href="#">Read More</a>
              </div>
              <br/>
              <div className="image_2">
                <img src="int2.jpg" alt="About Us" />
              
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
</>

  );
}

export default About;
