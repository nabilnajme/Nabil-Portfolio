import React from "react";
//import services data
import { services } from "../data";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* section title */}
        <motion.div
          variants={fadeIn("up", 0, 3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I Do For CLients
          </h2>
          <p className="subtitle">
            As a professional Front-End , I offer a wide range of services
            designed to help clients achieve their business objectives and grow
            their online presence. Whether you need a new website, a refreshed
            brand identity, or help with your SEO strategy, I have the expertise
            and experience necessary to deliver exceptional results
          </p>
        </motion.div>
        {/* item grid */}
        <motion.div
          variants={fadeIn("down", 0, 6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                {/* icon */}
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
