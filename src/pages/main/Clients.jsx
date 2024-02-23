import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';
import Partner3 from '../../assets/partner-3.png';
import Partner4 from '../../assets/partner-4.png';
import Partner5 from '../../assets/partner-5.png';

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">

        <div className="clients__title d-flex align-items-center justify-content-between">
          <h2 className="title mb-0">+1,250 Happy Clients</h2>
          <div className="swiper-button-wrap d-flex justify-content-end">
            <div className="swiper-button prev-arrow" id="swp-client-prev">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </div>
            <div className="swiper-button next-arrow" id="swp-client-next">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          navigation={{
            prevEl: "#swp-client-prev",
            nextEl: "#swp-client-next",
          }}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="inner-box">
              <div className="quote">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <h2>
                Bobs Hanley <span>/ Director at Spotify</span>
              </h2>
              <p>
                Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                Rubino staveuo at magna akal semper Fusce commodo molestie
                luctus. Lorem ipsum ulicon Dolor tusima olatiup.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner-box">
              <div className="quote">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <h2>
                Ryan Betthalyn <span>/ Director at Chobham Manor</span>
              </h2>
              <p>
                Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                Rubino staveuo at magna akal semper Fusce commodo molestie
                luctus. Lorem ipsum ulicon Dolor tusima olatiup.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner-box">
              <div className="quote">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <h2>
                Bobs Hanley <span>/ Director at Spotify</span>
              </h2>
              <p>
                Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                Rubino staveuo at magna akal semper Fusce commodo molestie
                luctus. Lorem ipsum ulicon Dolor tusima olatiup.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner-box">
              <div className="quote">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <h2>
                Ryan Betthalyn <span>/ Director at Chobham Manor</span>
              </h2>
              <p>
                Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                Rubino staveuo at magna akal semper Fusce commodo molestie
                luctus. Lorem ipsum ulicon Dolor tusima olatiup.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper partners"
        >

          <SwiperSlide>
            <div className="partner">
              <img src={Partner1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner">
              <img src={Partner2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner">
              <img src={Partner3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner">
              <img src={Partner4} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner">
              <img src={Partner5} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner">
              <img src={Partner4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
