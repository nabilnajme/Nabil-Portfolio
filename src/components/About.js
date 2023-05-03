import React from "react";
// import image
import Image from "../assets/img/about1.png";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
        <motion.div variants={fadeIn("right", 0, 3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}>
        <img
            className="object-cover h-full w-[1500px] md:mx-auto lg:mx-0 rounded-lg"
            src={Image}
            alt=""
          />
        </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0, 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-5xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Nabil Maizou
              </h2>
              <p className="mb-4 text-accent">Freelance web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hello, I'm a Nabil Maizou, I'm Developer based in sale, Morocco.
                I'm passionate about web development and I'm always looking for
                more new challenges and experience. I started my journey
                learning web development in 2020 and since then I've been
                working on many projects. I'm currently seeking for an
                Internship as a Front-End Developer.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
