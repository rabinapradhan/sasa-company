import React, { useEffect } from "react";

import construction from "../assets/construction2.jpg";
import construction1 from "../assets/construct.jpg";
import "../styles/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-screen scroll-smooth h-screen">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="w-screen h-screen">
            <img
              src={construction}
              className="w-full h-full"
              alt="hero Section"
            />

            <div
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              className="absolute left-[30%] md:top-[50%] top-[40%]"
            >
              <h2 className="font-audrey md:text-3xl text-2xl pl-0 tracking-[0.3rem] text-white ">
                {" "}
                WHERE IT ALL COMES TOGETHER
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <img
              src={construction1}
              alt="Hero Section"
              className="w-full h-full"
            />
            <div className="absolute left-[30%] md:left-[50%] md:top-[50%] top-[40%]">
              <h2 className="font-audrey md:text-3xl  text-xl tracking-[0.3rem] text-white">
                {" "}
                PROVIDING ALL KINDS OF <br /> CONSTRUCTION SERVICES
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
