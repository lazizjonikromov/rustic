import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { latestProjects } from "../../data";

const LatestProjects = () => {
  return (
    <div className="latest__projects">
      <div className="container">
        <div className="latest__project-title d-flex justify-content-between align-items-center">
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
          {latestProjects && latestProjects.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={item.path} className="project__item">
                <div className="project__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="project__content">
                  <span>{item.category}</span>
                  <h2>{item.title}</h2>
                </div>
              </Link> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProjects;
