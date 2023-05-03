import React from "react";
//import componenets*
import TestimonialSlider from "../components/TestimonialSlider";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <motion.div
        variants={fadeIn("down", 0, 3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What Other People Say
          </h2>
          <p className="subtitle"></p>
        </div>
        <TestimonialSlider />
      </motion.div>
    </section>
  );
};

export default Testimonials;
