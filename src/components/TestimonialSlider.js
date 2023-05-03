import React from "react";
//import testimonial data
import { testimonials } from "../data";
//import swper componenets
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";
//import required mobile
import { Autoplay, Pagination } from "swiper";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeIn("up", 0, 3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-32"
              >
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-2xl mb-8 italic font-normal">
                    {authorText}
                  </h5>
                  <div>
                    <p className="text-accent text-lg">{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
