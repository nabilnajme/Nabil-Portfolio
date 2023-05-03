import React from "react";
//import  componenets
import Projects from "../components/Projects";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0, 6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:-left-3/4 before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle text-2xl">
            There is some of my project worikng on it
          </p>
        </motion.div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
