import React from "react";
// import brands data
import { brands } from "../data";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <motion.div
        variants={fadeIn("up", 0, 3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly"
      >
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Brands;
