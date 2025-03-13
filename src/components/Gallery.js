import React from "react";
import '../Gallery.css';

const Portfolio = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col text-center mb-4">
            <h1 className="mb-4">Some Of Our Awesome Interior Designing Projects</h1>
          </div>
        </div>

        <div className="row mx-1 portfolio-container">
          {[
            { imgSrc: "int1.jpg" },
            { imgSrc: "int2.jpg"},
            { imgSrc: "int10.jpg" },
            { imgSrc: "int4.jpg"},
            { imgSrc: "int7.jpg" },
            { imgSrc: "int8.jpg"}
          ].map((project, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ${project.category}`}
            >
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={project.imgSrc} alt={`Project ${index + 1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
