import React from 'react';
import '../Carousel.css';

function Carousel() {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/int1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="/int2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/int4.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="/int5.png" className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src="/int7.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src="/int8.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src="/int9.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src="/int10.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
      </div>
      <div class="detail-box1">
      <div class="col-md-8 col-lg-6 mx-auto">
        <div class="inner_detail-box">
          <h1>
            Interior Design <br/>
            Studio
          </h1>
          <p>
          Interior design studios engage in a multi-step process including client consultations, concept development, space planning, material selection, and implementation to achieve functional and aesthetically pleasing designs.
          </p>
        
        </div>
      </div>
    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Prevoius</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
