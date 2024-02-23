import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { posts } from "../../data";
import { Autoplay } from "swiper/modules";

const Articles = () => {
  return (
    <div className="articles">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="title mb-0">Editorials</h2>
          <div className="sub__title mb-0">ALL ARTICLES</div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
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
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper posts"
        >
          {posts.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={item.path} className="post-item">
                <div className="post-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.createdAt} by <span>Admin</span></p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Articles;
