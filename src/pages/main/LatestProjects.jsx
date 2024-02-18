import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Project1 from "../../assets/brossia.jpg";
import Project2 from "../../assets/chobham.jpg";
import Project3 from "../../assets/combines.jpg";
import Project4 from "../../assets/innovation.jpg";
import Project6 from "../../assets/nordic.jpg";
import Project7 from "../../assets/sample.jpg";
import Project8 from "../../assets/hidden-agenda.jpg";

const LatestProjects = () => {
  return (
    <div className="latest__projects">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="title mb-0">Latest Projects</h2>
          <div className="sub__title mb-0">ALL PROJECTS</div>
        </div>
      </div>

      <div className="project__items">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project1} alt="" />
              </div>
              <div className="project__content">
                <span>Residenital</span>
                <h2>Brossia Heigh Luxury Apartment</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project2} alt="" />
              </div>
              <div className="project__content">
                <span>Suitantable Space</span>
                <h2>Chobham Manor Masterplan</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project3} alt="" />
              </div>
              <div className="project__content">
                <span>Commercial</span>
                <h2>Combines Design With Nature</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project4} alt="" />
              </div>
              <div className="project__content">
                <span>Suitantable Space</span>
                <h2>Innovation Private Residence</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project1} alt="" />
              </div>
              <div className="project__content">
                <span>Commercial</span>
                <h2>Inspired From China In Web Design</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project6} alt="" />
              </div>
              <div className="project__content">
                <span>Copper Brass</span>
                <h2>Nordic Interior Studio</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project7} alt="" />
              </div>
              <div className="project__content">
                <span>Commercial</span>
                <h2>Sample Villa</h2>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"} className="project__item">
              <div className="project__img">
                <img src={Project8} alt="" />
              </div>
              <div className="project__content">
                <span>Residenital</span>
                <h2>The Hidden Agenda Of Residenital</h2>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProjects;
