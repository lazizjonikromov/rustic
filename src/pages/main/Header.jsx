import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import headerImg from "../../assets/header-slide-1.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
          className="mySwiper"
        >
          <SwiperSlide>
            <span>
              <img src={headerImg} alt="" />
            </span>
            <div className="header-box">
              <div className="container">
                <div className="row text-start">
                  <div className="col-2 d-none d-lg-flex flex-column justify-content-between head__social">
                    <p>2024</p>
                    <ul className="d-flex flex-column gap-3">
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-10 d-flex flex-column text-start gap-5 head__text">
                    <h5>Rustic Interior <br /> Studio</h5>
                    <h2>Rustic and <br /> Modern</h2>
                    <div className="head__btn">
                      <a href="#" className="myBtn">
                        More About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <span>
              <img src={headerImg} alt="" />
            </span>
            <div className="header-box">
              <div className="container">
                <div className="row text-start">
                  <div className="col-2 d-none d-lg-flex flex-column justify-content-between head__social">
                    <p>2024</p>
                    <ul className="d-flex flex-column gap-3">
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-10 d-flex flex-column text-start gap-5 head__text"> 
                    <h5>Rustic Interior <br /> Studio</h5>
                    <h2>Rustic and <br /> Modern</h2>
                    <div className="head__btn">
                      <a href="#" className="myBtn">
                        More About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Header;
