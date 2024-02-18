import React from "react";
import ServiceImg from "../../assets/services-img.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="service__content col-lg-6">
            <span className="sub__title mt-4 mt-lg-0">SERVICES</span>
            <h2 className="title">
              Best solutions for <br /> your dream.
            </h2>

            <div className="container">
              <div className="service__boxes row flex-lg-column">
                <div className="box col-12 col-lg-10 d-flex">
                  <i className="bi bi-house-door"></i>
                  <div className="box__text">
                    <a href="#">RESIDENTIAL</a>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
                <div className="box col-12 col-lg-10 d-flex">
                  <i className="bi bi-cart3"></i>
                  <div className="box__text">
                    <a href="#">COMMERCIAL</a>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
                <div className="box col-12 col-lg-10 d-flex">
                  <i className="bi bi-arrow-clockwise"></i>
                  <div className="box__text">
                    <a href="#">SUITANABLE SPACE</a>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service__image col-lg-6">
            <img src={ServiceImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
