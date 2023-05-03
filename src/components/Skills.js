import React from "react";
//import skills from data
import { skills } from "../data";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <motion.div
        variants={fadeIn("down", 0, 3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
