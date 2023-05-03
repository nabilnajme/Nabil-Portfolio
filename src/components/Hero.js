import React from "react";
//import women img
import WomanImg from "../assets/img/banner-woman2.webp";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("down", 0, 3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto h-full"
      >
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">Hey I'm Nabil </p>
            <h1 className="text-4xl leading-[44px] sm:items-center sm:justify-center md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I build & Fix problem <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 mb:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am a FrontEnd developer with experience building websites and
              web applications. I specialize in JavaScript, ReactJS, NextJs,
              Tailwind CSS and HTML.
            </p>
            <button className="btn btn-sm bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              Work With me
            </button>
          </div>
          {/* rigth side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
