import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-5 ">
            <span className="sub__title mb-0">ABOUT</span>
            <h2 className="title">
              Over 12 years leading and deeps in interiors industrial
            </h2>
            <h3>
              We know that good design means
              good business
            </h3>
            <p>
              Founded by Robert Downey Jr in 2004, we’re an employee-owned firm
              pursuing a democratic design process that values everyone’s input.
              Today we have more than 150 people in London, Hong Kong and Sydney
              providing architecture, interior & urban design services from
              concept to completion.
            </p>
            <Link to={"#"} className="myBtn">
              More About Us
            </Link>
          </div>
          <div className="col-12 col-lg-7 about__img">
            <span>
              <img src={AboutImg} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
