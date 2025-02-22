import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "/home/seira/Developments/Javascript/test-app/node_modules/swiper/modules/effect-coverflow.css";
import "/home/seira/Developments/Javascript/test-app/node_modules/swiper/modules/pagination.css";
import "/home/seira/Developments/Javascript/test-app/node_modules/swiper/modules/navigation.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/11.jpg";
import slide_image_2 from "../../assets/12.jpg";
import slide_image_3 from "../../assets/13.jpg";

console.log(slide_image_1);
console.log(slide_image_2);
console.log(slide_image_3);

const SliderImage = () => {
  return (
    <section className="relative image-section mt-38">
      <div className="absolute left-1/2 top-1/3 w-[80%] h-full bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 blur-3xl opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container z-50">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.1}
          spaceBetween={250}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none z-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="circle-mask">
                  <rect width="100%" height="100%" fill="white" />

                  {/* Lingkaran Tengah */}
                  <circle cx="50" cy="0" r="6" fill="black" />

                  {/* Lengkungan Kiri (Quadratic Curve) */}
                  <path
                    d="M0 0C1 0 2 0 2 1A1 1 0 008 1C8 0 9 0 10 0"
                    fill="black"
                    transform="scale(2)"
                  />

                  {/* Lengkungan Kanan (Quadratic Curve) */}
                  {/* <path d="M 80 0 Q 60 -6 70 0" fill="black" /> */}
                </mask>
              </defs>

              <rect
                width="100%"
                height="100%"
                fill="#fff"
                mask="url(#circle-mask)"
              />
            </svg>
          </div>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <div className="arrow-back-outline"></div>
            </div>
            <div className="swiper-button-next slider-arrow">
              <div className="arrow-forward-outline"></div>
            </div>
          </div>
        </Swiper>
      </div>
      {/* <div className="parallel-logo absolute w-full h-[50%] bottom-0">
        <div className="relative">
          <Marquee />
        </div>
      </div> */}
    </section>
  );
};

export default SliderImage;
